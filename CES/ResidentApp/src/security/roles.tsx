import { i18n } from 'src/i18n';

class Roles {
  static get values() {
    return {
      admin: 'admin',
      operator: 'operator',
      renter: 'renter',
      resident: 'resident',
    };
  }

  static labelOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.label`);
  }

  static descriptionOf(roleId) {
    if (!this.values[roleId]) {
      return roleId;
    }

    return i18n(`roles.${roleId}.description`);
  }
}

export default Roles;
