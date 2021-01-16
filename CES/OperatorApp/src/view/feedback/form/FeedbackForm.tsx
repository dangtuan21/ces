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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import feedbackEnumerators from 'src/modules/feedback/feedbackEnumerators';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.feedback.fields.title'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.feedback.fields.description'),
    {},
  ),
  feedbackStatus: yupFormSchemas.enumerator(
    i18n('entities.feedback.fields.feedbackStatus'),
    {
      options: feedbackEnumerators.feedbackStatus,
    },
  ),
  assignee: yupFormSchemas.relationToOne(
    i18n('entities.feedback.fields.assignee'),
    {},
  ),
});

function FeedbackForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      feedbackStatus: record.feedbackStatus,
      assignee: record.assignee,
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
                label={i18n(
                  'entities.feedback.fields.title',
                )}
                required={false}
                autoFocus
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <TextAreaFormItem
                name="description"
                label={i18n(
                  'entities.feedback.fields.description',
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <SelectFormItem
                name="feedbackStatus"
                label={i18n(
                  'entities.feedback.fields.feedbackStatus',
                )}
                options={feedbackEnumerators.feedbackStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.feedback.enumerators.feedbackStatus.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </div>
            <div className="col-lg-7 col-md-8 col-12">
              <UserAutocompleteFormItem
                name="assignee"
                label={i18n(
                  'entities.feedback.fields.assignee',
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

export default FeedbackForm;
