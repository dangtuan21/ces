import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function PropertyView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.property.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.property.fields.description')}
        value={record.description}
      />

      {record.unitPrice != null && <TextViewItem
        label={i18n('entities.property.fields.unitPrice')}
        value={record.unitPrice.toFixed(2)}
      />}

      <ImagesViewItem
        label={i18n('entities.property.fields.photos')}
        value={record.photos}
      />

      <TextViewItem
        label={i18n('entities.property.fields.propertyType')}
        value={
          record.propertyType &&
          i18n(
            `entities.property.enumerators.propertyType.${record.propertyType}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.property.fields.bedRooms')}
        value={record.bedRooms}
      />

      <TextViewItem
        label={i18n('entities.property.fields.fullBathRooms')}
        value={record.fullBathRooms}
      />

      <TextViewItem
        label={i18n('entities.property.fields.halfBathRooms')}
        value={record.halfBathRooms}
      />

      <TextViewItem
        label={i18n('entities.property.fields.area')}
        value={record.area}
      />

      <TextViewItem
        label={i18n('entities.property.fields.headLine')}
        value={record.headLine}
      />
    </ViewWrapper>
  );
}

export default PropertyView;
