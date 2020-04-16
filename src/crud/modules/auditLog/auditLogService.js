import axios from 'axios';

export default class AuditLogService {
  static async fetch(filter, orderBy, limit, offset) {
    const query = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await axios.get('/auditLog', {
      params: query,
    });

    return response.data;
  }
}
