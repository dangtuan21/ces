import { i18n } from 'src/i18n';
import actions from 'src/modules/resident/list/residentListActions';
import selectors from 'src/modules/resident/list/residentListSelectors';
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
import PropertyAutocompleteFormItem from 'src/view/property/autocomplete/PropertyAutocompleteFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFilterSchemas.string(
    i18n('entities.resident.fields.firstName'),
  ),
  lastName: yupFilterSchemas.string(
    i18n('entities.resident.fields.lastName'),
  ),
  middleName: yupFilterSchemas.string(
    i18n('entities.resident.fields.middleName'),
  ),
  phoneNumber: yupFilterSchemas.string(
    i18n('entities.resident.fields.phoneNumber'),
  ),
  email: yupFilterSchemas.string(
    i18n('entities.resident.fields.email'),
  ),
  property: yupFilterSchemas.relationToOne(
    i18n('entities.resident.fields.property'),
  ),
  user: yupFilterSchemas.relationToOne(
    i18n('entities.resident.fields.user'),
  ),
});

const emptyValues = {
  firstName: null,
  lastName: null,
  middleName: null,
  phoneNumber: null,
  email: null,
  property: null,
  user: null,
};

const previewRenders = {
  firstName: {
    label: i18n('entities.resident.fields.firstName'),
    render: filterRenders.generic(),
  },
  lastName: {
    label: i18n('entities.resident.fields.lastName'),
    render: filterRenders.generic(),
  },
  middleName: {
    label: i18n('entities.resident.fields.middleName'),
    render: filterRenders.generic(),
  },
  phoneNumber: {
    label: i18n('entities.resident.fields.phoneNumber'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('entities.resident.fields.email'),
    render: filterRenders.generic(),
  },
  property: {
    label: i18n('entities.resident.fields.property'),
    render: filterRenders.relationToOne(),
  },
  user: {
    label: i18n('entities.resident.fields.user'),
    render: filterRenders.relationToOne(),
  },
};

function ResidentListFilter(props) {
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
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
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
                    name="firstName"
                    label={i18n(
                      'entities.resident.fields.firstName',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="lastName"
                    label={i18n(
                      'entities.resident.fields.lastName',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="middleName"
                    label={i18n(
                      'entities.resident.fields.middleName',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="phoneNumber"
                    label={i18n(
                      'entities.resident.fields.phoneNumber',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <InputFormItem
                    name="email"
                    label={i18n(
                      'entities.resident.fields.email',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <PropertyAutocompleteFormItem
                    name="property"
                    label={i18n(
                      'entities.resident.fields.property',
                    )}
                  />
                </div>
                <div className="col-lg-6 col-12">
                  <UserAutocompleteFormItem
                    name="user"
                    label={i18n(
                      'entities.resident.fields.user',
                    )}
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

export default ResidentListFilter;
