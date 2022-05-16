import styled from 'styled-components';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { size } from '../../../stylesheet/utils/stylesVars';
import Header from '../../Header';
import HomeTab from '../../HomeTab';
import DiagramTab from '../../DiagramTab';
import Currency from '../../Currency';
import Navigation from '../../Navigation';
import Balance from '../../Balance';

export default function DashBoardPage() {
  ///  при загрузці  треба  доставати транзакції щоб їх  рендерити в  Hometab
  return (
    <>
      <Header />
      <MainWrap>
        <SideBar>
          <MobSidebar>
            <Navigation />
            {/* <Balance /> */}
            <Media query="(min-width: 768px)" render={() => <Balance />} />
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
        </TabWrap>
      </MainWrap>
    </>
  );
}

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(50px);
  flex-grow: 1;

  ${size.tablet} {
    padding: 32px 32px;
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
  /* align-items: center; */
  ${size.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* justify-content: start; */
  }

  ${size.desktop} {
    display: flex;
    padding-right: 69px;
    padding-top: 40px;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    border-right: 1px solid #e7e5f2;
    /* box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6); */
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
  justify-content: center;
  flex-direction: column;
`;
