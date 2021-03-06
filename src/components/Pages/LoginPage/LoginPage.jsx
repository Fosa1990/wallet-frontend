import LoginForm from '../../LoginForm';
import ContainerAuth from '../../ContainerAuth';
import imgLoginTab from '../../../assets/images/frame-login-tablet.png';
import imgLoginTabBest from '../../../assets/images/frame-login-tablet@2x.png';
import imgLogin from '../../../assets/images/frame-login.png';
import imgLoginBest from '../../../assets/images/frame-login@2x.png';

export default function LoginPage() {
  return (
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
  );
}
