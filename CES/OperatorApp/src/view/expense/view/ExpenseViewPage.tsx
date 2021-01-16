import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/expense/view/expenseViewActions';
import selectors from 'src/modules/expense/view/expenseViewSelectors';
import ExpenseView from 'src/view/expense/view/ExpenseView';
import ExpenseViewToolbar from 'src/view/expense/view/ExpenseViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExpensePage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.expense.menu'), '/expense'],
          [i18n('entities.expense.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.expense.view.title')}
        </PageTitle>

        <ExpenseViewToolbar match={match} />

        <ExpenseView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ExpensePage;
