import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import property from 'src/modules/property/propertyReducers';
import resident from 'src/modules/resident/residentReducers';
import maintenanceRequest from 'src/modules/maintenanceRequest/maintenanceRequestReducers';
import announcement from 'src/modules/announcement/announcementReducers';
import feedback from 'src/modules/feedback/feedbackReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    property,
    resident,
    maintenanceRequest,
    announcement,
    feedback,
  });
