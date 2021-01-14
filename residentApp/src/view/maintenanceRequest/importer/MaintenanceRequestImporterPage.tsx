import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/maintenanceRequest/importer/maintenanceRequestImporterActions';
import fields from 'src/modules/maintenanceRequest/importer/maintenanceRequestImporterFields';
import selectors from 'src/modules/maintenanceRequest/importer/maintenanceRequestImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MaintenanceRequestImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.maintenanceRequest.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.maintenanceRequest.menu'), '/maintenance-request'],
          [i18n('entities.maintenanceRequest.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.maintenanceRequest.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MaintenanceRequestImportPage;
