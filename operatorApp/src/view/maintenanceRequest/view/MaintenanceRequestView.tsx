import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function MaintenanceRequestView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.maintenanceRequest.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.maintenanceRequest.fields.description')}
        value={record.description}
      />

      <FilesViewItem
        label={i18n(
          'entities.maintenanceRequest.fields.attachment',
        )}
        value={record.attachment}
      />

      <TextViewItem
        label={i18n('entities.maintenanceRequest.fields.category')}
        value={
          record.category &&
          i18n(
            `entities.maintenanceRequest.enumerators.category.${record.category}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default MaintenanceRequestView;
