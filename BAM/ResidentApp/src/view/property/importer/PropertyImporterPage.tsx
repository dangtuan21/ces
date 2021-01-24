import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/property/importer/propertyImporterActions';
import fields from 'src/modules/property/importer/propertyImporterFields';
import selectors from 'src/modules/property/importer/propertyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PropertyImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.property.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.property.menu'), '/property'],
          [i18n('entities.property.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.property.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PropertyImportPage;
