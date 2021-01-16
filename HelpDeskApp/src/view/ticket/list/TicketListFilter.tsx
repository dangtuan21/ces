import { i18n } from 'src/i18n';
import actions from 'src/modules/ticket/list/ticketListActions';
import selectors from 'src/modules/ticket/list/ticketListSelectors';
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
import ticketEnumerators from 'src/modules/ticket/ticketEnumerators';

const schema = yup.object().shape({
  title: yupFilterSchemas.string(
    i18n('entities.ticket.fields.title'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.ticket.fields.description'),
  ),
  category: yupFilterSchemas.enumerator(
    i18n('entities.ticket.fields.category'),
  ),
  comment: yupFilterSchemas.string(
    i18n('entities.ticket.fields.comment'),
  ),
  tag: yupFilterSchemas.string(
    i18n('entities.ticket.fields.tag'),
  ),
  ticketType: yupFilterSchemas.enumerator(
    i18n('entities.ticket.fields.ticketType'),
  ),
  ticketStatus: yupFilterSchemas.enumerator(
    i18n('entities.ticket.fields.ticketStatus'),
  ),
});

const emptyValues = {
  title: null,
  description: null,
  category: null,
  comment: null,
  tag: null,
  ticketType: null,
  ticketStatus: null,
}

const previewRenders = {
  title: {
    label: i18n('entities.ticket.fields.title'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.ticket.fields.description'),
    render: filterRenders.generic(),
  },
  category: {
    label: i18n('entities.ticket.fields.category'),
    render: filterRenders.enumerator('entities.ticket.enumerators.category',),
  },
  comment: {
    label: i18n('entities.ticket.fields.comment'),
    render: filterRenders.generic(),
  },
  tag: {
    label: i18n('entities.ticket.fields.tag'),
    render: filterRenders.generic(),
  },
  ticketType: {
    label: i18n('entities.ticket.fields.ticketType'),
    render: filterRenders.enumerator('entities.ticket.enumerators.ticketType',),
  },
  ticketStatus: {
    label: i18n('entities.ticket.fields.ticketStatus'),
    render: filterRenders.enumerator('entities.ticket.enumerators.ticketStatus',),
  },
}

function TicketListFilter(props) {
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
                        name="title"
                        label={i18n('entities.ticket.fields.title')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="description"
                        label={i18n('entities.ticket.fields.description')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="category"
                        label={i18n('entities.ticket.fields.category')}
                        options={ticketEnumerators.category.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.ticket.enumerators.category.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="comment"
                        label={i18n('entities.ticket.fields.comment')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <InputFormItem
                        name="tag"
                        label={i18n('entities.ticket.fields.tag')}      
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="ticketType"
                        label={i18n('entities.ticket.fields.ticketType')}
                        options={ticketEnumerators.ticketType.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.ticket.enumerators.ticketType.${value}`,
                            ),
                          }),
                        )}
                      />
                    </div>
                    <div className="col-lg-6 col-12">
                      <SelectFormItem
                        name="ticketStatus"
                        label={i18n('entities.ticket.fields.ticketStatus')}
                        options={ticketEnumerators.ticketStatus.map(
                          (value) => ({
                            value,
                            label: i18n(
                              `entities.ticket.enumerators.ticketStatus.${value}`,
                            ),
                          }),
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

export default TicketListFilter;