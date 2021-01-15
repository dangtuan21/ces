import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/property',
    loader: () =>
      import('src/view/property/list/PropertyListPage'),
    permissionRequired: permissions.propertyRead,
    exact: true,
  },
  {
    path: '/property/new',
    loader: () =>
      import('src/view/property/form/PropertyFormPage'),
    permissionRequired: permissions.propertyCreate,
    exact: true,
  },
  {
    path: '/property/importer',
    loader: () =>
      import(
        'src/view/property/importer/PropertyImporterPage'
      ),
    permissionRequired: permissions.propertyImport,
    exact: true,
  },
  {
    path: '/property/:id/edit',
    loader: () =>
      import('src/view/property/form/PropertyFormPage'),
    permissionRequired: permissions.propertyEdit,
    exact: true,
  },
  {
    path: '/property/:id',
    loader: () =>
      import('src/view/property/view/PropertyViewPage'),
    permissionRequired: permissions.propertyRead,
    exact: true,
  },

  {
    path: '/resident',
    loader: () =>
      import('src/view/resident/list/ResidentListPage'),
    permissionRequired: permissions.residentRead,
    exact: true,
  },
  {
    path: '/resident/new',
    loader: () =>
      import('src/view/resident/form/ResidentFormPage'),
    permissionRequired: permissions.residentCreate,
    exact: true,
  },
  {
    path: '/resident/importer',
    loader: () =>
      import(
        'src/view/resident/importer/ResidentImporterPage'
      ),
    permissionRequired: permissions.residentImport,
    exact: true,
  },
  {
    path: '/resident/:id/edit',
    loader: () =>
      import('src/view/resident/form/ResidentFormPage'),
    permissionRequired: permissions.residentEdit,
    exact: true,
  },
  {
    path: '/resident/:id',
    loader: () =>
      import('src/view/resident/view/ResidentViewPage'),
    permissionRequired: permissions.residentRead,
    exact: true,
  },

  {
    path: '/expense',
    loader: () =>
      import('src/view/expense/list/ExpenseListPage'),
    permissionRequired: permissions.expenseRead,
    exact: true,
  },
  {
    path: '/expense/new',
    loader: () =>
      import('src/view/expense/form/ExpenseFormPage'),
    permissionRequired: permissions.expenseCreate,
    exact: true,
  },
  {
    path: '/expense/importer',
    loader: () =>
      import(
        'src/view/expense/importer/ExpenseImporterPage'
      ),
    permissionRequired: permissions.expenseImport,
    exact: true,
  },
  {
    path: '/expense/:id/edit',
    loader: () =>
      import('src/view/expense/form/ExpenseFormPage'),
    permissionRequired: permissions.expenseEdit,
    exact: true,
  },
  {
    path: '/expense/:id',
    loader: () =>
      import('src/view/expense/view/ExpenseViewPage'),
    permissionRequired: permissions.expenseRead,
    exact: true,
  },

  {
    path: '/maintenance-request',
    loader: () =>
      import(
        'src/view/maintenanceRequest/list/MaintenanceRequestListPage'
      ),
    permissionRequired: permissions.maintenanceRequestRead,
    exact: true,
  },
  {
    path: '/maintenance-request/new',
    loader: () =>
      import(
        'src/view/maintenanceRequest/form/MaintenanceRequestFormPage'
      ),
    permissionRequired:
      permissions.maintenanceRequestCreate,
    exact: true,
  },
  {
    path: '/maintenance-request/importer',
    loader: () =>
      import(
        'src/view/maintenanceRequest/importer/MaintenanceRequestImporterPage'
      ),
    permissionRequired:
      permissions.maintenanceRequestImport,
    exact: true,
  },
  {
    path: '/maintenance-request/:id/edit',
    loader: () =>
      import(
        'src/view/maintenanceRequest/form/MaintenanceRequestFormPage'
      ),
    permissionRequired: permissions.maintenanceRequestEdit,
    exact: true,
  },
  {
    path: '/maintenance-request/:id',
    loader: () =>
      import(
        'src/view/maintenanceRequest/view/MaintenanceRequestViewPage'
      ),
    permissionRequired: permissions.maintenanceRequestRead,
    exact: true,
  },

  {
    path: '/announcement',
    loader: () =>
      import(
        'src/view/announcement/list/AnnouncementListPage'
      ),
    permissionRequired: permissions.announcementRead,
    exact: true,
  },
  {
    path: '/announcement/new',
    loader: () =>
      import(
        'src/view/announcement/form/AnnouncementFormPage'
      ),
    permissionRequired: permissions.announcementCreate,
    exact: true,
  },
  {
    path: '/announcement/importer',
    loader: () =>
      import(
        'src/view/announcement/importer/AnnouncementImporterPage'
      ),
    permissionRequired: permissions.announcementImport,
    exact: true,
  },
  {
    path: '/announcement/:id/edit',
    loader: () =>
      import(
        'src/view/announcement/form/AnnouncementFormPage'
      ),
    permissionRequired: permissions.announcementEdit,
    exact: true,
  },
  {
    path: '/announcement/:id',
    loader: () =>
      import(
        'src/view/announcement/view/AnnouncementViewPage'
      ),
    permissionRequired: permissions.announcementRead,
    exact: true,
  },

  {
    path: '/feedback',
    loader: () =>
      import('src/view/feedback/list/FeedbackListPage'),
    permissionRequired: permissions.feedbackRead,
    exact: true,
  },
  {
    path: '/feedback/new',
    loader: () =>
      import('src/view/feedback/form/FeedbackFormPage'),
    permissionRequired: permissions.feedbackCreate,
    exact: true,
  },
  {
    path: '/feedback/importer',
    loader: () =>
      import(
        'src/view/feedback/importer/FeedbackImporterPage'
      ),
    permissionRequired: permissions.feedbackImport,
    exact: true,
  },
  {
    path: '/feedback/:id/edit',
    loader: () =>
      import('src/view/feedback/form/FeedbackFormPage'),
    permissionRequired: permissions.feedbackEdit,
    exact: true,
  },
  {
    path: '/feedback/:id',
    loader: () =>
      import('src/view/feedback/view/FeedbackViewPage'),
    permissionRequired: permissions.feedbackRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
