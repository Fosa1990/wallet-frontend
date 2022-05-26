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
import {
  size,
  statisticsWrapperBgCl,
  statisticsSidebarBorderCl,
} from '../../../styles/stylesVars';

const { STATISTICS, HOME, DIAGRAM, CURRENCY } = ROUTES;

export default function StatisticsPage() {
  const { pathname } = useLocation();
  const route = `/${STATISTICS}/${HOME}`;

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
                <Route path={HOME} element={<HomeTab />} />
                <Route path={DIAGRAM} element={<DiagramTab />} />
                <Route
                  path={CURRENCY}
                  element={
                    <>
                      <Media
                        query="(min-width: 768px)"
                        render={() => (
                          <Navigate to={`/${STATISTICS}/${HOME}`} />
                        )}
                      />
                      <Media
                        query="(max-width: 767px)"
                        render={() => <Currency />}
                      />
                    </>
                  }
                />
              </Routes>
            </TabWrap>
          </MainWrap>
          {pathname === route && <ButtonAddTransactions />}
        </Container>
      </WrapBackground>
    </>
  );
}
const WrapBackground = styled.div`
  ${size.tablet} {
    flex-grow: 1;
    background-color: ${statisticsWrapperBgCl};
    backdrop-filter: blur(50px);
  }
`;
const MainWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${size.desktop} {
    position: relative;
    padding: 0 16px;
    flex-direction: row;
    align-items: flex-start;
  }
`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  ${size.tablet} {
    padding-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
  ${size.desktop} {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding-right: 69px;
    padding-top: 40px;
    border-right: 1px solid ${statisticsSidebarBorderCl};
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
  justify-content: space-between;
`;
