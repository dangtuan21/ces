import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/expense/importer/expenseImporterActions';
import fields from 'src/modules/expense/importer/expenseImporterFields';
import selectors from 'src/modules/expense/importer/expenseImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ExpenseImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.expense.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.expense.menu'), '/expense'],
          [i18n('entities.expense.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.expense.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default ExpenseImportPage;
