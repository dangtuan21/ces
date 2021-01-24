import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.property.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.property.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.property.fields.description'),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.property.fields.unitPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'photos',
    label: i18n('entities.property.fields.photos'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'propertyType',
    label: i18n('entities.property.fields.propertyType'),
  },
  {
    name: 'bedRooms',
    label: i18n('entities.property.fields.bedRooms'),
  },
  {
    name: 'fullBathRooms',
    label: i18n('entities.property.fields.fullBathRooms'),
  },
  {
    name: 'halfBathRooms',
    label: i18n('entities.property.fields.halfBathRooms'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'area',
    label: i18n('entities.property.fields.area'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'headLine',
    label: i18n('entities.property.fields.headLine'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.property.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.property.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
