import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';

function TicketView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.ticket.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.ticket.fields.description')}
        value={record.description}
      />

      <FilesViewItem
        label={i18n(
          'entities.ticket.fields.attachment',
        )}
        value={record.attachment}
      />

      <TextViewItem
        label={i18n('entities.ticket.fields.category')}
        value={
          record.category &&
          i18n(
            `entities.ticket.enumerators.category.${record.category}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.ticket.fields.comment')}
        value={record.comment}
      />

      <TextViewItem
        label={i18n('entities.ticket.fields.tag')}
        value={record.tag}
      />

      <TextViewItem
        label={i18n('entities.ticket.fields.ticketType')}
        value={
          record.ticketType &&
          i18n(
            `entities.ticket.enumerators.ticketType.${record.ticketType}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.ticket.fields.ticketStatus')}
        value={
          record.ticketStatus &&
          i18n(
            `entities.ticket.enumerators.ticketStatus.${record.ticketStatus}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default TicketView;
