// const backendUrl = `http://localhost:8080/api`;
//  ttt
const backendUrl = process.env.REACT_APP_BACKEND_URL;
/**
 * Frontend Url.
 */
const frontendUrl = {
  host: 'localhost:3000',
  protocol: 'http',
};

console.log(
  'ttt backendUrl',
  backendUrl,
  ', frontendUrl',
  frontendUrl,
);

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'single';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = true;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
};
