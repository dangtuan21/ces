import Roles from './roles';
import Plans from './plans';
import Storage from './storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin, roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },

      propertyImport: {
        id: 'propertyImport',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      propertyCreate: {
        id: 'propertyCreate',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.propertyPhotos],
      },
      propertyEdit: {
        id: 'propertyEdit',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.propertyPhotos],
      },
      propertyDestroy: {
        id: 'propertyDestroy',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.propertyPhotos],
      },
      propertyRead: {
        id: 'propertyRead',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      propertyAutocomplete: {
        id: 'propertyAutocomplete',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      residentImport: {
        id: 'residentImport',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      residentCreate: {
        id: 'residentCreate',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      residentEdit: {
        id: 'residentEdit',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      residentDestroy: {
        id: 'residentDestroy',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      residentRead: {
        id: 'residentRead',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      residentAutocomplete: {
        id: 'residentAutocomplete',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      expenseImport: {
        id: 'expenseImport',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      expenseCreate: {
        id: 'expenseCreate',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      expenseEdit: {
        id: 'expenseEdit',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      expenseDestroy: {
        id: 'expenseDestroy',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      expenseRead: {
        id: 'expenseRead',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      expenseAutocomplete: {
        id: 'expenseAutocomplete',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      maintenanceRequestImport: {
        id: 'maintenanceRequestImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      maintenanceRequestCreate: {
        id: 'maintenanceRequestCreate',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.maintenanceRequestAttachment,
        ],
      },
      maintenanceRequestEdit: {
        id: 'maintenanceRequestEdit',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.maintenanceRequestAttachment,
        ],
      },
      maintenanceRequestDestroy: {
        id: 'maintenanceRequestDestroy',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.maintenanceRequestAttachment,
        ],
      },
      maintenanceRequestRead: {
        id: 'maintenanceRequestRead',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      maintenanceRequestAutocomplete: {
        id: 'maintenanceRequestAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      announcementImport: {
        id: 'announcementImport',
        allowedRoles: [roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      announcementCreate: {
        id: 'announcementCreate',
        allowedRoles: [roles.admin, roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      announcementEdit: {
        id: 'announcementEdit',
        allowedRoles: [roles.admin, roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      announcementDestroy: {
        id: 'announcementDestroy',
        allowedRoles: [roles.admin, roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      announcementRead: {
        id: 'announcementRead',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.resident,
          roles.renter,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      announcementAutocomplete: {
        id: 'announcementAutocomplete',
        allowedRoles: [roles.admin, roles.operator],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      feedbackImport: {
        id: 'feedbackImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      feedbackCreate: {
        id: 'feedbackCreate',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      feedbackEdit: {
        id: 'feedbackEdit',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      feedbackDestroy: {
        id: 'feedbackDestroy',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      feedbackRead: {
        id: 'feedbackRead',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      feedbackAutocomplete: {
        id: 'feedbackAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      contactImport: {
        id: 'contactImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      contactCreate: {
        id: 'contactCreate',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      contactEdit: {
        id: 'contactEdit',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      contactDestroy: {
        id: 'contactDestroy',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [],
      },
      contactRead: {
        id: 'contactRead',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      contactAutocomplete: {
        id: 'contactAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },

      ticketImport: {
        id: 'ticketImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      ticketCreate: {
        id: 'ticketCreate',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.ticketAttachment],
      },
      ticketEdit: {
        id: 'ticketEdit',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.ticketAttachment],
      },
      ticketDestroy: {
        id: 'ticketDestroy',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [storage.ticketAttachment],
      },
      ticketRead: {
        id: 'ticketRead',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      ticketAutocomplete: {
        id: 'ticketAutocomplete',
        allowedRoles: [
          roles.admin,
          roles.operator,
          roles.renter,
          roles.resident,
        ],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
