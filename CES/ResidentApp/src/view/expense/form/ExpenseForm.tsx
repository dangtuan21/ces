import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import expenseEnumerators from 'src/modules/expense/expenseEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import PropertyAutocompleteFormItem from 'src/view/property/autocomplete/PropertyAutocompleteFormItem';

const schema = yup.object().shape({
  category: yupFormSchemas.enumerator(
    i18n('entities.expense.fields.category'),
    {
      "options": expenseEnumerators.category
    },
  ),
  amount: yupFormSchemas.decimal(
    i18n('entities.expense.fields.amount'),
    {},
  ),
  property: yupFormSchemas.relationToOne(
    i18n('entities.expense.fields.property'),
    {},
  ),
  payDate: yupFormSchemas.date(
    i18n('entities.expense.fields.payDate'),
    {},
  ),
  vendor: yupFormSchemas.string(
    i18n('entities.expense.fields.vendor'),
    {},
  ),
});

function ExpenseForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      category: record.category,
      amount: record.amount,
      property: record.property,
      payDate: record.payDate ? moment(record.payDate, 'YYYY-MM-DD').toDate() : null,
      vendor: record.vendor,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="category"
                label={i18n('entities.expense.fields.category')}
                options={expenseEnumerators.category.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.expense.enumerators.category.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="amount"
                label={i18n('entities.expense.fields.amount')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PropertyAutocompleteFormItem  
                name="property"
                label={i18n('entities.expense.fields.property')}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <DatePickerFormItem
                name="payDate"
                label={i18n('entities.expense.fields.payDate')}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="vendor"
                label={i18n('entities.expense.fields.vendor')}  
                required={false}
              />
            </div>
          </div>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />{' '}
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>{' '}
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>{' '}
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default ExpenseForm;
