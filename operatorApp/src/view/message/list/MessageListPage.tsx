import React from 'react';
import { i18n } from 'src/i18n';
import MessageListFilter from 'src/view/message/list/MessageListFilter';
import MessageListTable from 'src/view/message/list/MessageListTable';
import MessageListToolbar from 'src/view/message/list/MessageListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MessageListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.message.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.message.list.title')}
        </PageTitle>

        <MessageListToolbar />
        <MessageListFilter />
        <MessageListTable />
      </ContentWrapper>
    </>
  );
}

export default MessageListPage;
