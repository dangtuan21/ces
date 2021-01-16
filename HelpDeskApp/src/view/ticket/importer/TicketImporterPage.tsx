import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/ticket/importer/ticketImporterActions';
import fields from 'src/modules/ticket/importer/ticketImporterFields';
import selectors from 'src/modules/ticket/importer/ticketImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TicketImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.ticket.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.ticket.menu'), '/ticket'],
          [i18n('entities.ticket.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.ticket.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default TicketImportPage;
