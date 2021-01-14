import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function MessageView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.message.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.message.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.message.fields.messageStatus')}
        value={
          record.messageStatus &&
          i18n(
            `entities.message.enumerators.messageStatus.${record.messageStatus}`,
          )
        }
      />

      <UserViewItem
        label={i18n('entities.message.fields.assignee')}
        value={record.assignee}
      />
    </ViewWrapper>
  );
}

export default MessageView;
