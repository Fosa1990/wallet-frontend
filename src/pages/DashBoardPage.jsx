import styled from 'styled-components';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { size } from '../stylesheet/utils/stylesVars';
import Header from '../components/Header';
import HomeTab from '../components/HomeTab';
import DiagramTab from '../components/DiagramTab';
import Currency from '../components/Currency';
import Navigation from '../components/Navigation';
import Balance from '../components/Balance';

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  /* padding: 15px 20px; */
  /* background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(50px); */
  /* flex-grow: 1; */
  height: 100%;
  ${size.tablet} {
    padding: 32px 32px;
  }
  ${size.desktop} {
    padding: 0 16px;
    flex-direction: row;
    /* position: relative; */
  }
`;
const SideBar = styled.div`
  ${size.tablet} {
    /* margin-bottom: 15px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: flex-start;
    justify-content: flex-start; */
  }

  ${size.desktop} {
    padding-right: 69px;
    /* margin-bottom: 15px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #e7e5f2;
    /* box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6); */
  }
`;
const TabWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const MobSidebar = styled.div`
  /* display: flex; */
`;

const DashboardPage = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <SideBar>
          <MobSidebar>
            <Navigation />
            <Balance />
            {/* <Media query="(min-width: 768px)" render={() => <Balance />} /> */}
          </MobSidebar>
          <Media query="(min-width: 768px)" render={() => <Currency />} />
        </SideBar>

        <TabWrap>
          <Routes>
            <Route index element={<HomeTab />} />
            <Route path="home" element={<HomeTab />} />
            <Route path="diagram" element={<DiagramTab />} />
            <Route
              path="currency"
              element={
                <Currency />
                // <Media query="(max-width: 768px)" render={() => <Currency />} />
              }
            />
          </Routes>
        </TabWrap>
      </MainWrap>
    </>
  );
};

export default DashboardPage;
