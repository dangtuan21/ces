import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/ticket/view/ticketViewActions';
import selectors from 'src/modules/ticket/view/ticketViewSelectors';
import TicketView from 'src/view/ticket/view/TicketView';
import TicketViewToolbar from 'src/view/ticket/view/TicketViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function TicketPage() {
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
          [i18n('entities.ticket.menu'), '/ticket'],
          [i18n('entities.ticket.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.ticket.view.title')}
        </PageTitle>

        <TicketViewToolbar match={match} />

        <TicketView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default TicketPage;
