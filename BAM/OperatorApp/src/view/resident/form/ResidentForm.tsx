import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import PropertyAutocompleteFormItem from 'src/view/property/autocomplete/PropertyAutocompleteFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.resident.fields.firstName'),
    {},
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.resident.fields.lastName'),
    {},
  ),
  middleName: yupFormSchemas.string(
    i18n('entities.resident.fields.middleName'),
    {},
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('entities.resident.fields.phoneNumber'),
    {},
  ),
  email: yupFormSchemas.string(
    i18n('entities.resident.fields.email'),
    {},
  ),
  property: yupFormSchemas.relationToOne(
    i18n('entities.resident.fields.property'),
    {},
  ),
  user: yupFormSchemas.relationToOne(
    i18n('entities.resident.fields.user'),
    {},
  ),
});

function ResidentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      middleName: record.middleName,
      phoneNumber: record.phoneNumber,
      email: record.email,
      property: record.property,
      user: record.user,
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
                name="firstName"
                label={i18n(
                  'entities.resident.fields.firstName',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="lastName"
                label={i18n(
                  'entities.resident.fields.lastName',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="middleName"
                label={i18n(
                  'entities.resident.fields.middleName',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="phoneNumber"
                label={i18n(
                  'entities.resident.fields.phoneNumber',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <InputFormItem
                name="email"
                label={i18n(
                  'entities.resident.fields.email',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <PropertyAutocompleteFormItem
                name="property"
                label={i18n(
                  'entities.resident.fields.property',
                )}
                required={false}
                showCreate={!props.modal}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="user"
                label={i18n(
                  'entities.resident.fields.user',
                )}
                required={false}
                showCreate={!props.modal}
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

export default ResidentForm;
