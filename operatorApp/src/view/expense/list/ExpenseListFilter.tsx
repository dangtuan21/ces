import { i18n } from 'src/i18n';
import actions from 'src/modules/expense/list/expenseListActions';
import selectors from 'src/modules/expense/list/expenseListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FilterWrapper from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import expenseEnumerators from 'src/modules/expense/expenseEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PropertyAutocompleteFormItem from 'src/view/property/autocomplete/PropertyAutocompleteFormItem';

const schema = yup.object().shape({
  category: yupFilterSchemas.enumerator(
    i18n('entities.expense.fields.category'),
  ),
  amountRange: yupFilterSchemas.decimalRange(
    i18n('entities.expense.fields.amountRange'),
  ),
  property: yupFilterSchemas.relationToOne(
    i18n('entities.expense.fields.property'),
  ),
  payDateRange: yupFilterSchemas.dateRange(
    i18n('entities.expense.fields.payDateRange'),
  ),
  vendor: yupFilterSchemas.string(
    i18n('entities.expense.fields.vendor'),
  ),
});

const emptyValues = {
  category: null,
  amountRange: [],
  property: null,
  payDateRange: [],
  vendor: null,
}

const previewRenders = {
  category: {
    label: i18n('entities.expense.fields.category'),
    render: filterRenders.enumerator('entities.expense.enumerators.category',),
  },
  amountRange: {
    label: i18n('entities.expense.fields.amountRange'),
    render: filterRenders.decimalRange(),
  },
  property: {
      label: i18n('entities.expense.fields.property'),
      render: filterRenders.relationToOne(),
    },
  payDateRange: {
    label: i18n('entities.expense.fields.payDateRange'),
    render: filterRenders.dateRange(),
  },
  vendor: {
    label: i18n('entities.expense.fields.vendor'),
    render: filterRenders.generic(),
  },
}

function ExpenseListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className="container">
        <div
          className={`collapse ${expanded ? 'show' : ''}`}
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="row">
                    <div className="col-lg-6 col-12">
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
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="amountRange"
                        label={i18n('entities.expense.fields.amountRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <PropertyAutocompleteFormItem  
                        name="property"
                        label={i18n('entities.expense.fields.property')}        
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="payDateRange"
                        label={i18n('entities.expense.fields.payDateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="vendor"
                        label={i18n('entities.expense.fields.vendor')}      
                      />
                    </div>
              </div>

              <div className="row">
                <div className="col-12 filter-buttons">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-search"
                    />{' '}
                    {i18n('common.search')}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onReset}
                    disabled={props.loading}
                  >
                    <ButtonIcon
                      loading={props.loading}
                      iconClass="fas fa-undo"
                    />{' '}
                    {i18n('common.reset')}
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </FilterWrapper>
  );
}

export default ExpenseListFilter;