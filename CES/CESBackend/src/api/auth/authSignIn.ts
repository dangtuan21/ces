import ApiResponseHandler from '../apiResponseHandler';
import AuthService from '../../services/auth/authService';

export default async (req, res, next) => {
  try {
    const payload = await AuthService.signin(
      req.body.email,
      req.body.password,
      req.body.invitationToken,
      req.body.tenantId,
      req,
    );

    console.log('Sign in: ', req.body.email);
    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
