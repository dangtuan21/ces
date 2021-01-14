export default (app) => {
  app.post(
    `/tenant/:tenantId/expense`,
    require('./expenseCreate').default,
  );
  app.put(
    `/tenant/:tenantId/expense/:id`,
    require('./expenseUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/expense/import`,
    require('./expenseImport').default,
  );
  app.delete(
    `/tenant/:tenantId/expense`,
    require('./expenseDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/expense/autocomplete`,
    require('./expenseAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/expense`,
    require('./expenseList').default,
  );
  app.get(
    `/tenant/:tenantId/expense/:id`,
    require('./expenseFind').default,
  );
};
