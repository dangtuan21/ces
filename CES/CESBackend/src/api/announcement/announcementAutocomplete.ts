import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import AnnouncementService from '../../services/announcementService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.announcementAutocomplete,
    );

    const payload = await new AnnouncementService(
      req,
    ).findAllAutocomplete(req.query.query, req.query.limit);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
