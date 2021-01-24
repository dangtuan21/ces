import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/announcement/view/announcementViewActions';
import selectors from 'src/modules/announcement/view/announcementViewSelectors';
import AnnouncementView from 'src/view/announcement/view/AnnouncementView';
import AnnouncementViewToolbar from 'src/view/announcement/view/AnnouncementViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AnnouncementPage() {
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
          [i18n('entities.announcement.menu'), '/announcement'],
          [i18n('entities.announcement.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.announcement.view.title')}
        </PageTitle>

        <AnnouncementViewToolbar match={match} />

        <AnnouncementView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default AnnouncementPage;
