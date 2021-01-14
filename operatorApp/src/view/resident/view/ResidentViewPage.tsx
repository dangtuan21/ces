import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/resident/view/residentViewActions';
import selectors from 'src/modules/resident/view/residentViewSelectors';
import ResidentView from 'src/view/resident/view/ResidentView';
import ResidentViewToolbar from 'src/view/resident/view/ResidentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ResidentPage() {
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
          [i18n('entities.resident.menu'), '/resident'],
          [i18n('entities.resident.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.resident.view.title')}
        </PageTitle>

        <ResidentViewToolbar match={match} />

        <ResidentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ResidentPage;
