import React from 'react';
import { i18n } from 'src/i18n';
import AnnouncementListFilter from 'src/view/announcement/list/AnnouncementListFilter';
import AnnouncementListTable from 'src/view/announcement/list/AnnouncementListTable';
import AnnouncementListToolbar from 'src/view/announcement/list/AnnouncementListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnnouncementListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.announcement.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.announcement.list.title')}
        </PageTitle>

        <AnnouncementListToolbar />
        <AnnouncementListFilter />
        <AnnouncementListTable />
      </ContentWrapper>
    </>
  );
}

export default AnnouncementListPage;
