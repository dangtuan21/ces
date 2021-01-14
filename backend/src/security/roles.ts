/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      admin: 'admin',
      operator: 'operator',
      renter: 'renter',
      resident: 'resident',
    };
  }
}

export default Roles;
