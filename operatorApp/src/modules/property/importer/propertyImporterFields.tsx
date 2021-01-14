import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import propertyEnumerators from 'src/modules/property/propertyEnumerators';

export default [
  {
    name: 'name',
    label: i18n('entities.property.fields.name'),
    schema: schemas.string(
      i18n('entities.property.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.property.fields.description'),
    schema: schemas.string(
      i18n('entities.property.fields.description'),
      {
        "max": 21845
      },
    ),
  },
  {
    name: 'unitPrice',
    label: i18n('entities.property.fields.unitPrice'),
    schema: schemas.decimal(
      i18n('entities.property.fields.unitPrice'),
      {
        "required": true,
        "scale": 2,
        "min": 0.01,
        "max": 99999
      },
    ),
  },
  {
    name: 'photos',
    label: i18n('entities.property.fields.photos'),
    schema: schemas.images(
      i18n('entities.property.fields.photos'),
      {
        "max": 3
      },
    ),
  },
  {
    name: 'propertyType',
    label: i18n('entities.property.fields.propertyType'),
    schema: schemas.enumerator(
      i18n('entities.property.fields.propertyType'),
      {
        "options": propertyEnumerators.propertyType
      },
    ),
  },
  {
    name: 'bedRooms',
    label: i18n('entities.property.fields.bedRooms'),
    schema: schemas.integer(
      i18n('entities.property.fields.bedRooms'),
      {},
    ),
  },
  {
    name: 'fullBathRooms',
    label: i18n('entities.property.fields.fullBathRooms'),
    schema: schemas.integer(
      i18n('entities.property.fields.fullBathRooms'),
      {},
    ),
  },
  {
    name: 'halfBathRooms',
    label: i18n('entities.property.fields.halfBathRooms'),
    schema: schemas.decimal(
      i18n('entities.property.fields.halfBathRooms'),
      {},
    ),
  },
  {
    name: 'area',
    label: i18n('entities.property.fields.area'),
    schema: schemas.decimal(
      i18n('entities.property.fields.area'),
      {},
    ),
  },
  {
    name: 'headLine',
    label: i18n('entities.property.fields.headLine'),
    schema: schemas.string(
      i18n('entities.property.fields.headLine'),
      {},
    ),
  },
];