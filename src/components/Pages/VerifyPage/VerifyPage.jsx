import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Logo';
import { circleFont, size } from '../../../styles/stylesVars';

export default function VerifyPage() {
  // eslint-disable-next-line no-unused-vars
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
