import LoginForm from '../../LoginForm';
import styled from 'styled-components';
import {
  size,
  accentBgCl,
  poppinsFont,
  bgTabletWalletCl,
} from '../../../stylesheet/utils/stylesVars';
import imgLogin from '../../../images/frame-login.png';

const Section = styled.section`
  height: 100vh;
  background: ${props => props.color || accentBgCl};
  ${size.tablet} {
    background-color: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  // flex-direction: column;
  // align-items: center;
  padding: 107px 20px 0;
  // margin-left: auto;
  // margin-right: auto;
  // min-height: 100vh;
  ${size.tablet} {
    display: block;
    padding: 60px 20px 0 20px;
  }
  ${size.desktop} {
    display: flex;
    // flex-direction: row;
    // justify-content: center;
    padding: 0;
  }
`;

const DivTop = styled.div`
  display: none;
  ${size.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  ${size.desktop} {
    width: 435px;
    flex-direction: column;
    margin-bottom: 0;
    margin-left: 76px;
    margin-right: 38px;
    margin-top: 150px;
  }
`;

const LoginFormWrap = styled.div`
  ${size.mobile} {
  }
  ${size.tablet} {
    // margin-left: auto;
    // margin-right: auto;
    display: flex;
    justify-content: center;
  }
  ${size.desktop} {
    width: 100%;
    // height: calc(100vh - 604px);
    justify-content: center;
    // padding-left: 107px;
    // padding-right: 91px;
    // padding-top: 136px;
    padding: 136px 91px 0px 107px;
    padding-bottom: calc(100vh - 604px);
    // align-items: center;
    background-color: ${props => props.color || bgTabletWalletCl};
    backdrop-filter: blur(50px);
    // z-index: 1;
  }
`;

// const LoginFormWrapContainer = styled.div`
//   // margin-top: 136px;
//   // margin-right: auto;
//   // margin-left: auto;
//   // padding-left: 8px;
// `;

const Sidebar = styled.div`
  ${size.tablet} {
    background-image: url(${imgLogin});
    background-repeat: no-repeat;
    background-size: 260px 250px;
    height: 250px;
    width: 260px;
  }
  ${size.desktop} {
    margin-bottom: 28px;
    background-size: 435px 420px;
    height: 420px;
    width: 435px;
  }
`;

const Text = styled.p`
  margin-left: 40px;
  font-family: ${poppinsFont};
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  ${size.desktop} {
    margin-left: 0;
  }
`;

export default function LoginPage() {
  return (
    <>
      <Section>
        <Container>
          <DivTop>
            <Sidebar />
            <Text>Finance App</Text>
          </DivTop>
          <LoginFormWrap>
            {/* <LoginFormWrapContainer> */}
            <LoginForm />
            {/* </LoginFormWrapContainer> */}
          </LoginFormWrap>
        </Container>
      </Section>
    </>
  );
}
