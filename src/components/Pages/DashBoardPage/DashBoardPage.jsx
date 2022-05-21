import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import Media from 'react-media';
import { useSelector } from 'react-redux';
import Header from '../../Header';
import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Currency from '../../Currency';
import Navigation from '../../Navigation';
import Balance from '../../Balance';
import authSelectors from '../../../redux/auth';
import { ROUTES } from '../../../helpers/constants';
import ButtonAddTransactions from '../../ButtonAddTransactions';
import { selectIsModalAddTransactionOpen } from '../../../redux/globalSelectors';
import ModalAddTransactions from '../../ModalAddTransactions';
import { size } from '../../../stylesheet/utils/stylesVars';

export default function DashBoardPage() {
  const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  const showModalAddTransactions = useSelector(selectIsModalAddTransactionOpen);
  useEffect(() => {
    if (isLoggedin) {
      toast.info('Welcome to Amazing wallet');
    }
  }, []);

  return (
    <>
      <Header />
      <MainWrap>
        <SideBar>
          <MobSidebar>
            <Navigation />
            <Media query="(min-width: 768px)" render={() => <Balance />} />
          </MobSidebar>
          <Media query="(min-width: 768px)" render={() => <Currency />} />
        </SideBar>

        <TabWrap>
          <Routes>
            <Route index element={<HomeTab />} />
            <Route path={ROUTES.HOME} element={<HomeTab />} />
            <Route path={ROUTES.DIAGRAM} element={<DiagramTab />} />
            <Route
              path={ROUTES.CURRENCY}
              element={
                <>
                  <Media
                    query="(min-width: 768px)"
                    render={() => <Navigate to="/dashboard/home" />}
                  />
                  <Media
                    query="(max-width: 767px)"
                    render={() => <Currency />}
                  />
                </>
              }
            />
          </Routes>
          <ButtonAddTransactions />
          {showModalAddTransactions && <ModalAddTransactions />}
        </TabWrap>
      </MainWrap>
    </>
  );
}

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(50px);
  flex-grow: 1;

  ${size.tablet} {
    padding: 0px 32px;
    justify-content: start;
  }
  ${size.desktop} {
    padding: 0 16px;
    flex-direction: row;
    position: relative;
  }
`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;

  ${size.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  ${size.desktop} {
    display: flex;
    padding-right: 69px;
    padding-top: 40px;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    border-right: 1px solid #e7e5f2;
  }
`;
const TabWrap = styled.div`
  display: flex;
  justify-content: center;
  ${size.desktop} {
    padding-left: 69px;
    padding-top: 40px;
  }
`;
const MobSidebar = styled.div`
  display: flex;
  flex-direction: column;
`;
