import React from 'react';
import { i18n } from 'src/i18n';
import MaintenanceRequestListFilter from 'src/view/maintenanceRequest/list/MaintenanceRequestListFilter';
import MaintenanceRequestListTable from 'src/view/maintenanceRequest/list/MaintenanceRequestListTable';
import MaintenanceRequestListToolbar from 'src/view/maintenanceRequest/list/MaintenanceRequestListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MaintenanceRequestListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.maintenanceRequest.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.maintenanceRequest.list.title')}
        </PageTitle>

        <MaintenanceRequestListToolbar />
        <MaintenanceRequestListFilter />
        <MaintenanceRequestListTable />
      </ContentWrapper>
    </>
  );
}

export default MaintenanceRequestListPage;
