import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/feedback/importer/feedbackImporterSelectors';
import FeedbackService from 'src/modules/feedback/feedbackService';
import fields from 'src/modules/feedback/importer/feedbackImporterFields';
import { i18n } from 'src/i18n';

const feedbackImporterActions = importerActions(
  'FEEDBACK_IMPORTER',
  selectors,
  FeedbackService.import,
  fields,
  i18n('entities.feedback.importer.fileName'),
);

export default feedbackImporterActions;