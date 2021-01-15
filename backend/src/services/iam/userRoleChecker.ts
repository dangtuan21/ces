import Roles from '../../security/roles';

class UserRoleChecker {
  private static getTenantUserRoles(options) {
    const tenantUser = options.currentUser.tenants.find(
      (userTenant) =>
        userTenant.tenant.id === options.currentTenant.id,
    );

    if (!tenantUser || !tenantUser.roles) {
      return [];
    }

    return tenantUser.roles;
  }

  static isOperator(options) {
    const roles = this.getTenantUserRoles(options);

    return roles.some((role) => {
      return role === Roles.values.operator;
    });
  }

  static isAdmin(options) {
    const roles = this.getTenantUserRoles(options);

    return roles.some((role) => {
      return role === Roles.values.admin;
    });
  }

  static isResident(options) {
    const roles = this.getTenantUserRoles(options);

    return roles.some((role) => {
      return role === Roles.values.resident;
    });
  }

  static isRenter(options) {
    const roles = this.getTenantUserRoles(options);

    return roles.some((role) => {
      return role === Roles.values.renter;
    });
  }
}

export default UserRoleChecker;
