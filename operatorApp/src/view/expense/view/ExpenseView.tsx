import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PropertyViewItem from 'src/view/property/view/PropertyViewItem';

function ExpenseView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.expense.fields.category')}
        value={
          record.category &&
          i18n(
            `entities.expense.enumerators.category.${record.category}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.expense.fields.amount')}
        value={record.amount}
      />

      <PropertyViewItem
        label={i18n('entities.expense.fields.property')}
        value={record.property}
      />

      <TextViewItem
        label={i18n('entities.expense.fields.payDate')}
        value={record.payDate}
      />

      <TextViewItem
        label={i18n('entities.expense.fields.vendor')}
        value={record.vendor}
      />
    </ViewWrapper>
  );
}

export default ExpenseView;
