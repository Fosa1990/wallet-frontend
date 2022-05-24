import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import Header from '../../Header';
import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Currency from '../../Currency';
import Navigation from '../../Navigation';
import Balance from '../../Balance';
import Container from '../../Container';
import ButtonAddTransactions from '../../ButtonAddTransactions';
import { ROUTES } from '../../../utils/constants';
import { size } from '../../../styles/stylesVars';

export default function DashBoardPage() {
  const { pathname } = useLocation();
  const route = `/${ROUTES.DASHBOARD}/${ROUTES.HOME}`;

  return (
    <>
      <Header />
      <WrapBackground>
        <Container>
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
                        render={() => <Navigate to="/statistics/home" />}
                      />
                      <Media
                        query="(max-width: 767px)"
                        render={() => <Currency />}
                      />
                    </>
                  }
                />
              </Routes>
              {pathname === route && <ButtonAddTransactions />}
            </TabWrap>
          </MainWrap>
        </Container>
      </WrapBackground>
    </>
  );
}
const WrapBackground = styled.div`
  ${size.tablet} {
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
    flex-grow: 1;
  }
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  ${size.tablet} {
    justify-content: start;
    align-items: center;
  }
  ${size.desktop} {
    padding: 0 16px;
    flex-direction: row;
    position: relative;
    align-items: flex-start;
  }
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  ${size.tablet} {
    display: flex;
    flex-direction: row;
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
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
