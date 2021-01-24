import React from 'react';
import { i18n } from 'src/i18n';
import ExpenseListFilter from 'src/view/expense/list/ExpenseListFilter';
import ExpenseListTable from 'src/view/expense/list/ExpenseListTable';
import ExpenseListToolbar from 'src/view/expense/list/ExpenseListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExpenseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.expense.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.expense.list.title')}
        </PageTitle>

        <ExpenseListToolbar />
        <ExpenseListFilter />
        <ExpenseListTable />
      </ContentWrapper>
    </>
  );
}

export default ExpenseListPage;
