import axios from 'axios';

export default class IamService {
  static async enable(ids) {
    return this._changeStatus(ids, false);
  }

  static async disable(ids) {
    return this._changeStatus(ids, true);
  }

  static async _changeStatus(ids, disabled) {
    const body = {
      ids,
      disabled: !!disabled,
    };

    const response = await axios.put(
      '/iam/status',
      body,
    );

    return response.data;
  }

  static async edit(data) {
    const body = {
      data,
    };
    const response = await axios.put('/iam', body);
    return response.data;
  }

  static async remove(emails, roles, all = false) {
    const params = {
      emails,
      roles,
      all,
    };

    const response = await axios.delete('/iam', {
      params,
    });

    return response.data;
  }

  static async create(data) {
    const body = {
      data,
    };

    const response = await axios.post('/iam', body);
    return response.data;
  }

  static async import(values, importHash) {
    const body = {
      data: {
        ...values,
      },
      importHash,
    };

    const response = await axios.post(
      '/iam/import',
      body,
    );
    return response.data;
  }

  static async find(id) {
    const response = await axios.get(`/iam/${id}`);
    return response.data;
  }

  static async fetchUsers(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await axios.get(`/iam/user`, {
      params,
    });
    return response.data;
  }

  static async fetchRoles(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
    };

    const response = await axios.get(`/iam/role`, {
      params,
    });

    return {
      rows: response.data,
      count: response.data.length,
    };
  }

  static async fetchUserAutocomplete(query, limit) {
    const params = {
      query,
      limit,
    };

    const response = await axios.get(
      `/iam/user/autocomplete`,
      {
        params,
      },
    );
    return response.data;
  }
}
