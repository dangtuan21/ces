import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PropertyViewItem from 'src/view/property/view/PropertyViewItem';

function ResidentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.resident.fields.firstName')}
        value={record.firstName}
      />

      <TextViewItem
        label={i18n('entities.resident.fields.lastName')}
        value={record.lastName}
      />

      <TextViewItem
        label={i18n('entities.resident.fields.middleName')}
        value={record.middleName}
      />

      <TextViewItem
        label={i18n('entities.resident.fields.phoneNumber')}
        value={record.phoneNumber}
      />

      <TextViewItem
        label={i18n('entities.resident.fields.email')}
        value={record.email}
      />

      <PropertyViewItem
        label={i18n('entities.resident.fields.property')}
        value={record.property}
      />
    </ViewWrapper>
  );
}

export default ResidentView;
