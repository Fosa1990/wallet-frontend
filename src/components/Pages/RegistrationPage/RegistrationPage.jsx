import ContainerAuth from '../../ContainerAuth';
import RegistrationForm from '../../RegistrationForm';
import imgRegisterTab from '../../../images/frame-register-tablet.png';
import imgRegisterTabBest from '../../../images/frame-register-tablet@2x.png';
import imgRegister from '../../../images/frame-register.png';
import imgRegisterBest from '../../../images/frame-register@2x.png';
import { TempNavMenu } from '../';
export default function RegistrationPage() {
  console.log('==REGIN==');
  return (
    <>
      <TempNavMenu pageName="RegistrationPage" />

      <ContainerAuth
        imgTab={imgRegisterTab}
        imgTabBest={imgRegisterTabBest}
        img={imgRegister}
        imgBest={imgRegisterBest}
        sizeTab="274px 250px"
        widthTab="274px"
        heightTab="250px"
        sizeDes="452px 412px"
        widthDes="452px"
        heightDes="412px"
        paddingTop="52px"
      >
        <RegistrationForm />
      </ContainerAuth>
    </>
  );
}
