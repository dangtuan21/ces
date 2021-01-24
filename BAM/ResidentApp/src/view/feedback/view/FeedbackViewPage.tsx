import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/feedback/view/feedbackViewActions';
import selectors from 'src/modules/feedback/view/feedbackViewSelectors';
import FeedbackView from 'src/view/feedback/view/FeedbackView';
import FeedbackViewToolbar from 'src/view/feedback/view/FeedbackViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FeedbackPage() {
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
          [i18n('entities.feedback.menu'), '/feedback'],
          [i18n('entities.feedback.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.feedback.view.title')}
        </PageTitle>

        <FeedbackViewToolbar match={match} />

        <FeedbackView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default FeedbackPage;
