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
    flex-grow: 1;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(50px);
  }
`;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${size.desktop} {
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    padding: 0 16px;
  }
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  ${size.tablet} {
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  ${size.desktop} {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    padding-right: 69px;
    padding-top: 40px;
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
  justify-content: space-between;
`;
