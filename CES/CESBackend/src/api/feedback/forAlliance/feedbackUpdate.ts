import ApiResponseHandler from '../../apiResponseHandler';
import FeedbackService from '../../../services/feedbackService';

export default async (req, res, next) => {
  try {
    console.log('ttt ');
    const payload = await new FeedbackService(req).update(
      req.body.id,
      req.body.data,
    );

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
