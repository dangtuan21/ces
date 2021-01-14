import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function AnnouncementView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.announcement.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.announcement.fields.description')}
        value={record.description}
      />
    </ViewWrapper>
  );
}

export default AnnouncementView;
