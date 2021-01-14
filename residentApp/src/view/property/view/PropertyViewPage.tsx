import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/property/view/propertyViewActions';
import selectors from 'src/modules/property/view/propertyViewSelectors';
import PropertyView from 'src/view/property/view/PropertyView';
import PropertyViewToolbar from 'src/view/property/view/PropertyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PropertyPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.property.menu'), '/property'],
          [i18n('entities.property.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.property.view.title')}
        </PageTitle>

        <PropertyViewToolbar match={match} />

        <PropertyView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PropertyPage;
