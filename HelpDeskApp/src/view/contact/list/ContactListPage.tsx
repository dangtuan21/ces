import React from 'react';
import { i18n } from 'src/i18n';
import ContactListFilter from 'src/view/contact/list/ContactListFilter';
import ContactListTable from 'src/view/contact/list/ContactListTable';
import ContactListToolbar from 'src/view/contact/list/ContactListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ContactListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.contact.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.contact.list.title')}
        </PageTitle>

        <ContactListToolbar />
        <ContactListFilter />
        <ContactListTable />
      </ContentWrapper>
    </>
  );
}

export default ContactListPage;
