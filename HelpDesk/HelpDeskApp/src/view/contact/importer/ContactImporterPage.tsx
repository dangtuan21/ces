import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/contact/importer/contactImporterActions';
import fields from 'src/modules/contact/importer/contactImporterFields';
import selectors from 'src/modules/contact/importer/contactImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ContactImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.contact.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.contact.menu'), '/contact'],
          [i18n('entities.contact.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.contact.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ContactImportPage;
