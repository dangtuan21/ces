import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import feedbackEnumerators from 'src/modules/feedback/feedbackEnumerators';

export default [
  {
    name: 'title',
    label: i18n('entities.feedback.fields.title'),
    schema: schemas.string(
      i18n('entities.feedback.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.feedback.fields.description'),
    schema: schemas.string(
      i18n('entities.feedback.fields.description'),
      {},
    ),
  },
  {
    name: 'feedbackStatus',
    label: i18n('entities.feedback.fields.feedbackStatus'),
    schema: schemas.enumerator(
      i18n('entities.feedback.fields.feedbackStatus'),
      {
        options: feedbackEnumerators.feedbackStatus,
      },
    ),
  },
  {
    name: 'sourceType',
    label: i18n('entities.feedback.fields.sourceType'),
    schema: schemas.enumerator(
      i18n('entities.feedback.fields.sourceType'),
      {
        options: feedbackEnumerators.sourceType,
      },
    ),
  },
  {
    name: 'sourceId',
    label: i18n('entities.feedback.fields.sourceId'),
    schema: schemas.string(
      i18n('entities.feedback.fields.sourceId'),
      {},
    ),
  },
  {
    name: 'assignee',
    label: i18n('entities.feedback.fields.assignee'),
    schema: schemas.relationToOne(
      i18n('entities.feedback.fields.assignee'),
      {},
    ),
  },
];
