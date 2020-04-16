let inMemoryToken = null;

export class AuthToken {
  static async get() {
    return (
      inMemoryToken || localStorage.getItem('token') || null
    );
  }

  static async set(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('token', token || '');
    } else {
      inMemoryToken = token;
      localStorage.setItem('token', '');
    }
  }
}
