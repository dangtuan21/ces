import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function FeedbackView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.feedback.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.feedback.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n(
          'entities.feedback.fields.feedbackStatus',
        )}
        value={
          record.feedbackStatus &&
          i18n(
            `entities.feedback.enumerators.feedbackStatus.${record.feedbackStatus}`,
          )
        }
      />
      <TextViewItem
        label={i18n('entities.feedback.fields.sourceType')}
        value={
          record.sourceType &&
          i18n(
            `entities.feedback.enumerators.sourceType.${record.sourceType}`,
          )
        }
      />
      <TextViewItem
        label={i18n('entities.feedback.fields.sourceId')}
        value={record.sourceId}
      />

      <UserViewItem
        label={i18n('entities.feedback.fields.assignee')}
        value={record.assignee}
      />
    </ViewWrapper>
  );
}

export default FeedbackView;
