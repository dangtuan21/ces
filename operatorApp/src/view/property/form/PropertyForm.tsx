import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import propertyEnumerators from 'src/modules/property/propertyEnumerators';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.property.fields.name'),
    {
      "required": true,
      "min": 2,
      "max": 255
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.property.fields.description'),
    {
      "max": 21845
    },
  ),
  unitPrice: yupFormSchemas.decimal(
    i18n('entities.property.fields.unitPrice'),
    {
      "required": true,
      "scale": 2,
      "min": 0.01,
      "max": 99999
    },
  ),
  photos: yupFormSchemas.images(
    i18n('entities.property.fields.photos'),
    {
      "max": 3
    },
  ),
  propertyType: yupFormSchemas.enumerator(
    i18n('entities.property.fields.propertyType'),
    {
      "options": propertyEnumerators.propertyType
    },
  ),
  bedRooms: yupFormSchemas.integer(
    i18n('entities.property.fields.bedRooms'),
    {},
  ),
  fullBathRooms: yupFormSchemas.integer(
    i18n('entities.property.fields.fullBathRooms'),
    {},
  ),
  halfBathRooms: yupFormSchemas.decimal(
    i18n('entities.property.fields.halfBathRooms'),
    {},
  ),
  area: yupFormSchemas.decimal(
    i18n('entities.property.fields.area'),
    {},
  ),
  headLine: yupFormSchemas.string(
    i18n('entities.property.fields.headLine'),
    {},
  ),
});

function PropertyForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      description: record.description,
      unitPrice: record.unitPrice,
      photos: record.photos || [],
      propertyType: record.propertyType,
      bedRooms: record.bedRooms,
      fullBathRooms: record.fullBathRooms,
      halfBathRooms: record.halfBathRooms,
      area: record.area,
      headLine: record.headLine,
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
              <InputFormItem
                name="name"
                label={i18n('entities.property.fields.name')}  
                required={true}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.property.fields.description')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="unitPrice"
                label={i18n('entities.property.fields.unitPrice')}  
                required={true}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <ImagesFormItem
                name="photos"
                label={i18n('entities.property.fields.photos')}
                required={false}
                storage={Storage.values.propertyPhotos}
                max={3}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
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
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="bedRooms"
                label={i18n('entities.property.fields.bedRooms')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputNumberFormItem
                name="fullBathRooms"
                label={i18n('entities.property.fields.fullBathRooms')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="halfBathRooms"
                label={i18n('entities.property.fields.halfBathRooms')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="area"
                label={i18n('entities.property.fields.area')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="headLine"
                label={i18n('entities.property.fields.headLine')}  
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

export default PropertyForm;
