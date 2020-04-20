import * as uuid from 'uuid/v4';
import filesize from 'filesize';
import { AuthToken } from 'crud/modules/auth/authToken';
import Axios from 'axios';
import config from 'config';

function extractExtensionFrom(filename) {
  if (!filename) {
    return null;
  }

  const regex = /(?:\.([^.]+))?$/;
  return regex.exec(filename)[1];
}

export default class FileUploader {
  static validate(file, schema) {
    if (!schema) {
      return;
    }

    if (schema.image) {
      if (!file.type.startsWith('image')) {
        throw new Error('You must upload an image');
      }
    }

    if (schema.size && file.size > schema.size) {
      throw new Error(
        'File is too big.'
      );
    }

    const extension = extractExtensionFrom(file.name);

    if (
      schema.formats &&
      !schema.formats.includes(extension)
    ) {
      throw new Error('Invalid format');
    }
  }

  static async upload(path, file, schema) {
    try {
      this.validate(file, schema);
    } catch (error) {
      return Promise.reject(error);
    }

    const extension = extractExtensionFrom(file.name);
    const id = uuid();
    const filename = `${id}.${extension}`;
    const privateUrl = `${path}/${filename}`;

    const publicUrl = await this.uploadToServer(
      file,
      path,
      filename,
    );

    return {
      id: id,
      name: file.name,
      sizeInBytes: file.size,
      privateUrl,
      publicUrl,
      new: true,
    };
  }

  static async uploadToServer(file, path, filename) {
    const token = await AuthToken.get();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);
    await Axios.post(
      `${config.baseURLApi}/upload/${path}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
//          authorization: token ? `Bearer ${token}` : '',
        },
      },
    );

    const privateUrl = `${path}/${filename}`;

    return `${config.baseURLApi}/download?privateUrl=${privateUrl}`;
  }
}
