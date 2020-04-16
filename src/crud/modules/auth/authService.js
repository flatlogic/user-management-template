import axios from 'axios';
import { AuthToken } from 'crud/modules/auth/authToken';

export default class AuthService {
  static async sendEmailVerification() {
    const response = await axios.post(
      '/auth/send-email-address-verification-email',
    );

    return response.data;
  }

  static async sendPasswordResetEmail(email) {
    const response = await axios.post(
      '/auth/send-password-reset-email',
      {
        email,
      },
    );

    return response.data;
  }

  static async registerWithEmailAndPassword(
    email,
    password,
  ) {
    const response = await axios.post('/auth/sign-up', {
      email,
      password,
    });

    return response.data;
  }

  static async signinWithEmailAndPassword(email, password) {
    const response = await axios.post('/auth/sign-in', {
      email,
      password,
    });

    return response.data;
  }

  static async fetchMe() {
    const response = await axios.get('/auth/me');
    return response.data;
  }

  static async isEmailConfigured() {
    const response = await axios.get(
      '/auth/email-configured',
    );
    return response.data;
  }

  static signout() {
    AuthToken.set(null, true);
  }

  static async updateProfile(
    firstName,
    lastName,
    phoneNumber,
    avatars,
  ) {
    const body = {
      profile: {
        firstName,
        lastName,
        phoneNumber,
        avatars,
      },
    };

    const response = await axios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }

  static async passwordReset(token, password) {
    const response = await axios.put(
      '/auth/password-reset',
      {
        token,
        password,
      },
    );

    return response.data;
  }

  static async verifyEmail(token) {
    const response = await axios.put(
      '/auth/verify-email',
      {
        token,
      },
    );

    return response.data;
  }
}
