import React from 'react';
import { i18n } from 'src/i18n';
import ResidentListFilter from 'src/view/resident/list/ResidentListFilter';
import ResidentListTable from 'src/view/resident/list/ResidentListTable';
import ResidentListToolbar from 'src/view/resident/list/ResidentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResidentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.resident.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resident.list.title')}
        </PageTitle>

        <ResidentListToolbar />
        <ResidentListFilter />
        <ResidentListTable />
      </ContentWrapper>
    </>
  );
}

export default ResidentListPage;
