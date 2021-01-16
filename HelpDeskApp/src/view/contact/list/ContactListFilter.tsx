import { i18n } from 'src/i18n';
import actions from 'src/modules/contact/list/contactListActions';
import selectors from 'src/modules/contact/list/contactListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import contactEnumerators from 'src/modules/contact/contactEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.contact.fields.name'),
  ),
  birthdateRange: yupFilterSchemas.dateRange(
    i18n('entities.contact.fields.birthdateRange'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.contact.fields.gender'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.contact.fields.title'),
  ),
  company: yupFilterSchemas.string(
    i18n('entities.contact.fields.company'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.contact.fields.email'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.contact.fields.phoneNumber'),
  ),
});

const emptyValues = {
  name: null,
  birthdateRange: [],
  gender: null,
  title: null,
  company: null,
  email: null,
  phoneNumber: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.contact.fields.name'),
    render: filterRenders.generic(),
  },
  birthdateRange: {
    label: i18n('entities.contact.fields.birthdateRange'),
    render: filterRenders.dateRange(),
  },
  gender: {
    label: i18n('entities.contact.fields.gender'),
    render: filterRenders.enumerator('entities.contact.enumerators.gender',),
  },
  title: {
    label: i18n('entities.contact.fields.title'),
    render: filterRenders.generic(),
  },
  company: {
    label: i18n('entities.contact.fields.company'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.contact.fields.email'),
    render: filterRenders.generic(),
  },
  phoneNumber: {
    label: i18n('entities.contact.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
}

function ContactListFilter(props) {
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
                      <InputFormItem
                        name="name"
                        label={i18n('entities.contact.fields.name')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <DatePickerRangeFormItem
                        name="birthdateRange"
                        label={i18n('entities.contact.fields.birthdateRange')}    
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="gender"
                        label={i18n('entities.contact.fields.gender')}
                        options={contactEnumerators.gender.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.contact.enumerators.gender.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="title"
                        label={i18n('entities.contact.fields.title')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="company"
                        label={i18n('entities.contact.fields.company')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="email"
                        label={i18n('entities.contact.fields.email')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="phoneNumber"
                        label={i18n('entities.contact.fields.phoneNumber')}      
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

export default ContactListFilter;