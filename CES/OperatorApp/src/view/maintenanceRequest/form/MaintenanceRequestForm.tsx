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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import maintenanceRequestEnumerators from 'src/modules/maintenanceRequest/maintenanceRequestEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.maintenanceRequest.fields.title'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.maintenanceRequest.fields.description'),
    {},
  ),
  attachment: yupFormSchemas.files(
    i18n('entities.maintenanceRequest.fields.attachment'),
    {},
  ),
  category: yupFormSchemas.enumerator(
    i18n('entities.maintenanceRequest.fields.category'),
    {
      "options": maintenanceRequestEnumerators.category
    },
  ),
});

function MaintenanceRequestForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      attachment: record.attachment || [],
      category: record.category,
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
                name="title"
                label={i18n('entities.maintenanceRequest.fields.title')}  
                required={false}
              autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n('entities.maintenanceRequest.fields.description')}  
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <FilesFormItem
                name="attachment"
                label={i18n('entities.maintenanceRequest.fields.attachment')}
                required={false}
                storage={Storage.values.maintenanceRequestAttachment}
                max={undefined}
                formats={undefined}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="category"
                label={i18n('entities.maintenanceRequest.fields.category')}
                options={maintenanceRequestEnumerators.category.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.maintenanceRequest.enumerators.category.${value}`,
                    ),
                  }),
                )}
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

export default MaintenanceRequestForm;
