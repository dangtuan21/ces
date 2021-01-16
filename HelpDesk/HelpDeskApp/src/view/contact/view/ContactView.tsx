import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ContactView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.contact.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.contact.fields.birthdate')}
        value={record.birthdate}
      />

      <TextViewItem
        label={i18n('entities.contact.fields.gender')}
        value={
          record.gender &&
          i18n(
            `entities.contact.enumerators.gender.${record.gender}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.contact.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.contact.fields.company')}
        value={record.company}
      />

      <TextViewItem
        label={i18n('entities.contact.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.contact.fields.phoneNumber')}
        value={record.phoneNumber}
      />
    </ViewWrapper>
  );
}

export default ContactView;
