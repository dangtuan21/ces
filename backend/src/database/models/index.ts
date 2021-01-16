const models = [
  require('./tenant').default,
  require('./auditLog').default,
  require('./settings').default,
  require('./user').default,
  require('./customer').default,
  require('./property').default,
  require('./order').default,
  require('./resident').default,
  require('./expense').default,
  require('./maintenanceRequest').default,
  require('./announcement').default,
  require('./feedback').default,
  require('./contact').default,
  require('./ticket').default,
];

export default function init(database) {
  for (let model of models) {
    model(database);
  }

  return database;
}

export async function createCollections(database) {
  for (let model of models) {
    await model(database).createCollection();
  }

  return database;
}
