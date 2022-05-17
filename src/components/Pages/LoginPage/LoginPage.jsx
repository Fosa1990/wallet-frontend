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
      <>
        <h1>RegistrationPage</h1>
        <a href="/">Home page - opened</a>
        <br />
        <a href="/login">Login - publicRestricted</a>
        <br />
        <a href="/registration">Registration - publicRestricted</a>
        <br />
        <a href="/dashboard">Dashboard - private</a>
      </>
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
