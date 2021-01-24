import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/announcement/importer/announcementImporterActions';
import fields from 'src/modules/announcement/importer/announcementImporterFields';
import selectors from 'src/modules/announcement/importer/announcementImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnnouncementImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.announcement.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.announcement.menu'), '/announcement'],
          [i18n('entities.announcement.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.announcement.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default AnnouncementImportPage;
