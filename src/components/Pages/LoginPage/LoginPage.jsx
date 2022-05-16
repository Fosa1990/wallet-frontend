import LoginForm from '../../LoginForm';
import ContainerAuth from '../../ContainerAuth';
import imgLoginTab from '../../../images/frame-login-tablet.png';
import imgLoginTabBest from '../../../images/frame-login-tablet@2x.png';
import imgLogin from '../../../images/frame-login.png';
import imgLoginBest from '../../../images/frame-login@2x.png';

export default function LoginPage() {
  console.log('==LOGIN==');
  return (
    <>
      <ContainerAuth
        imgTab={imgLoginTab}
        imgTabBest={imgLoginTabBest}
        img={imgLogin}
        imgBest={imgLoginBest}
        sizeTab="260px 250px"
        sizeDes="435px 420px"
        widthTab="260px"
        heightTab="250px"
        widthDes="435px"
        heightDes="420px"
      >
        <LoginForm />
      </ContainerAuth>
    </>
  );
}
