import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import Logo from '../../Logo';
import { circleFont, size } from '../../../stylesheet/utils/stylesVars';

export default function VerifyPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const userName = searchParams.get('name');
  const userEmail = searchParams.get('email');

  return (
    <PageWrap>
      <Text>Hello {userName},</Text>
      <Text>you verified your email {userEmail} successful</Text>
      <Text>Now you can login the app</Text>
      <Logo />
      <Text>and help yourself with income and expense accounting</Text>
      {/* <a href="http://localhost:3000/">Click to LOCAL_TESTING</a>
      <a href="https://amazing-wallet.netlify.app/">Click to Login</a> */}
    </PageWrap>
  );
}

const Text = styled.div`
  font-family: ${circleFont};
  font-size: 16px;
  line-height: 1.8;
  text-align: center;
  ${size.tablet} {
    font-size: 24px;
  }
`;
const PageWrap = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
