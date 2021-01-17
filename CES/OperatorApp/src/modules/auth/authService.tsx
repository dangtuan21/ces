import authAxios from 'src/modules/shared/axios/authAxios';
import { AuthToken } from 'src/modules/auth/authToken';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';
import AuthInvitationToken from 'src/modules/auth/authInvitationToken';
import { tenantSubdomain } from '../tenant/tenantSubdomain';

export default class AuthService {
  static async sendEmailVerification() {
    const response = await authAxios.post(
      '/auth/send-email-address-verification-email',
      {
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async sendPasswordResetEmail(email) {
    const response = await authAxios.post(
      '/auth/send-password-reset-email',
      {
        email,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async registerWithEmailAndPassword(
    email,
    password,
  ) {
    const invitationToken = AuthInvitationToken.get();

    const response = await authAxios.post('/auth/sign-up', {
      email,
      password,
      invitationToken,
      tenantId: tenantSubdomain.isSubdomain
        ? AuthCurrentTenant.get()
        : undefined,
    });

    AuthInvitationToken.clear();

    return response.data;
  }

  static async signinWithEmailAndPassword(email, password) {
    const invitationToken = AuthInvitationToken.get();
    console.log('Signin... ttt22', email);
    try {
      const axios = require('axios');
      const result = await axios.post(
        'http://localhost:8080',
        {
          email,
          password,
          invitationToken,
          tenantId: tenantSubdomain.isSubdomain
            ? AuthCurrentTenant.get()
            : undefined,
        },
      );
      console.log(`statusCode: ${result.status}`);
      console.log('Tuan Result ', result.data);

      AuthInvitationToken.clear();

      return result.data;
    } catch (error) {
      console.log('ttt err', error);
    }
  }
  static async signinWithEmailAndPassword___(
    email,
    password,
  ) {
    const invitationToken = AuthInvitationToken.get();
    console.log('Signin... ttt222333444', email);
    try {
      const response = await authAxios.post(
        '/auth/sign-in',
        {
          email,
          password,
          invitationToken,
          tenantId: tenantSubdomain.isSubdomain
            ? AuthCurrentTenant.get()
            : undefined,
        },
      );
      AuthInvitationToken.clear();

      return response.data;
    } catch (error) {
      console.log('ttt err', error);
    }
  }

  static async fetchMe() {
    const response = await authAxios.get('/auth/me');
    return response.data;
  }

  static async isEmailConfigured() {
    const response = await authAxios.get(
      '/auth/email-configured',
    );
    return response.data;
  }

  static signout() {
    AuthToken.set(null, true);
  }

  static async updateProfile(data) {
    const body = {
      data,
    };

    const response = await authAxios.put(
      '/auth/profile',
      body,
    );

    return response.data;
  }

  static async changePassword(oldPassword, newPassword) {
    const body = {
      oldPassword,
      newPassword,
    };

    const response = await authAxios.put(
      '/auth/change-password',
      body,
    );

    return response.data;
  }

  static async passwordReset(token, password) {
    const response = await authAxios.put(
      '/auth/password-reset',
      {
        token,
        password,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }

  static async verifyEmail(token) {
    const response = await authAxios.put(
      '/auth/verify-email',
      {
        token,
        tenantId: tenantSubdomain.isSubdomain
          ? AuthCurrentTenant.get()
          : undefined,
      },
    );

    return response.data;
  }
}
