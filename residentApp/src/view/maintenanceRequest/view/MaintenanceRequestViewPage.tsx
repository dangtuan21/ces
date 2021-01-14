import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/maintenanceRequest/view/maintenanceRequestViewActions';
import selectors from 'src/modules/maintenanceRequest/view/maintenanceRequestViewSelectors';
import MaintenanceRequestView from 'src/view/maintenanceRequest/view/MaintenanceRequestView';
import MaintenanceRequestViewToolbar from 'src/view/maintenanceRequest/view/MaintenanceRequestViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MaintenanceRequestPage() {
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
          [i18n('entities.maintenanceRequest.menu'), '/maintenance-request'],
          [i18n('entities.maintenanceRequest.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.maintenanceRequest.view.title')}
        </PageTitle>

        <MaintenanceRequestViewToolbar match={match} />

        <MaintenanceRequestView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MaintenanceRequestPage;
