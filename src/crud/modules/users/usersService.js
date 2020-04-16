import axios from 'axios';

export default class UsersService {
  static async update(id, data) {
    const body = {
      id,
      data,
    };

    const response = await axios.put(
      `/users/${id}`,
      body,
    );

    return response.data;
  }

  static async destroyAll(ids) {
    const params = {
      ids,
    };

    const response = await axios.delete(`/users`, {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await axios.post(
      `/users`,
      body,
    );

    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: values,
      importHash,
    };

    const response = await axios.post(
      `/users/import`,
      body,
    );

    return response.data;
  }

  static async find(id) {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  }

  static async list(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await axios.get(`/users`, {
      params,
    });

    return response.data;
  }

  static async listAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const response = await axios.get(
      `/users/autocomplete`,
      {
        params,
      },
    );

    return response.data;
  }
}
