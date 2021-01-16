import React from 'react';
import { i18n } from 'src/i18n';
import FeedbackListFilter from 'src/view/feedback/list/FeedbackListFilter';
import FeedbackListTable from 'src/view/feedback/list/FeedbackListTable';
import FeedbackListToolbar from 'src/view/feedback/list/FeedbackListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FeedbackListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.feedback.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.feedback.list.title')}
        </PageTitle>

        <FeedbackListToolbar />
        <FeedbackListFilter />
        <FeedbackListTable />
      </ContentWrapper>
    </>
  );
}

export default FeedbackListPage;
