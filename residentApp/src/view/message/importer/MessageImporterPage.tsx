import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/message/importer/messageImporterActions';
import fields from 'src/modules/message/importer/messageImporterFields';
import selectors from 'src/modules/message/importer/messageImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MessageImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.message.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.message.menu'), '/message'],
          [i18n('entities.message.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.message.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MessageImportPage;
