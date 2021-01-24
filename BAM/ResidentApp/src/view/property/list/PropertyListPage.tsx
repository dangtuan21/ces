import React from 'react';
import { i18n } from 'src/i18n';
import PropertyListFilter from 'src/view/property/list/PropertyListFilter';
import PropertyListTable from 'src/view/property/list/PropertyListTable';
import PropertyListToolbar from 'src/view/property/list/PropertyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PropertyListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.property.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.property.list.title')}
        </PageTitle>

        <PropertyListToolbar />
        <PropertyListFilter />
        <PropertyListTable />
      </ContentWrapper>
    </>
  );
}

export default PropertyListPage;
