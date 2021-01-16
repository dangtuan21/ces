import React from 'react';
import { i18n } from 'src/i18n';
import TicketListFilter from 'src/view/ticket/list/TicketListFilter';
import TicketListTable from 'src/view/ticket/list/TicketListTable';
import TicketListToolbar from 'src/view/ticket/list/TicketListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TicketListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.ticket.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.ticket.list.title')}
        </PageTitle>

        <TicketListToolbar />
        <TicketListFilter />
        <TicketListTable />
      </ContentWrapper>
    </>
  );
}

export default TicketListPage;
