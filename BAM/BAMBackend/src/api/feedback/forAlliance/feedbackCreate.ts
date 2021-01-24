import ApiResponseHandler from '../../apiResponseHandler';
import FeedbackService from '../../../services/feedbackService';

export default async (req, res, next) => {
  try {
    const payload = await new FeedbackService(req).create(
      req.body.data,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
