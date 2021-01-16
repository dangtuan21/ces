import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

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
