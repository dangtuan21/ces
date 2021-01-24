import { i18n } from 'src/i18n';
import actions from 'src/modules/property/list/propertyListActions';
import selectors from 'src/modules/property/list/propertyListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import propertyEnumerators from 'src/modules/property/propertyEnumerators';

const schema = yup.object().shape({
  name: yupFilterSchemas.string(
    i18n('entities.property.fields.name'),
  ),
  unitPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.property.fields.unitPriceRange'),
  ),
  propertyType: yupFilterSchemas.enumerator(
    i18n('entities.property.fields.propertyType'),
  ),
  bedRoomsRange: yupFilterSchemas.integerRange(
    i18n('entities.property.fields.bedRoomsRange'),
  ),
  fullBathRoomsRange: yupFilterSchemas.integerRange(
    i18n('entities.property.fields.fullBathRoomsRange'),
  ),
  halfBathRoomsRange: yupFilterSchemas.decimalRange(
    i18n('entities.property.fields.halfBathRoomsRange'),
  ),
  areaRange: yupFilterSchemas.decimalRange(
    i18n('entities.property.fields.areaRange'),
  ),
  headLine: yupFilterSchemas.string(
    i18n('entities.property.fields.headLine'),
  ),
});

const emptyValues = {
  name: null,
  unitPriceRange: [],
  propertyType: null,
  bedRoomsRange: [],
  fullBathRoomsRange: [],
  halfBathRoomsRange: [],
  areaRange: [],
  headLine: null,
}

const previewRenders = {
  name: {
    label: i18n('entities.property.fields.name'),
    render: filterRenders.generic(),
  },
  unitPriceRange: {
    label: i18n('entities.property.fields.unitPriceRange'),
    render: filterRenders.decimalRange(2),
  },
  propertyType: {
    label: i18n('entities.property.fields.propertyType'),
    render: filterRenders.enumerator('entities.property.enumerators.propertyType',),
  },
  bedRoomsRange: {
    label: i18n('entities.property.fields.bedRoomsRange'),
    render: filterRenders.range(),
  },
  fullBathRoomsRange: {
    label: i18n('entities.property.fields.fullBathRoomsRange'),
    render: filterRenders.range(),
  },
  halfBathRoomsRange: {
    label: i18n('entities.property.fields.halfBathRoomsRange'),
    render: filterRenders.decimalRange(),
  },
  areaRange: {
    label: i18n('entities.property.fields.areaRange'),
    render: filterRenders.decimalRange(),
  },
  headLine: {
    label: i18n('entities.property.fields.headLine'),
    render: filterRenders.generic(),
  },
}

function PropertyListFilter(props) {
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
                        label={i18n('entities.property.fields.name')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="unitPriceRange"
                        label={i18n('entities.property.fields.unitPriceRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="propertyType"
                        label={i18n('entities.property.fields.propertyType')}
                        options={propertyEnumerators.propertyType.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.property.enumerators.propertyType.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="bedRoomsRange"
                        label={i18n('entities.property.fields.bedRoomsRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputNumberRangeFormItem
                        name="fullBathRoomsRange"
                        label={i18n('entities.property.fields.fullBathRoomsRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="halfBathRoomsRange"
                        label={i18n('entities.property.fields.halfBathRoomsRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputRangeFormItem
                        name="areaRange"
                        label={i18n('entities.property.fields.areaRange')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="headLine"
                        label={i18n('entities.property.fields.headLine')}      
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

export default PropertyListFilter;