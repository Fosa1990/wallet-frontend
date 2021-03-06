import ContainerAuth from '../../ContainerAuth';
import RegistrationForm from '../../RegistrationForm';
import imgRegisterTab from '../../../assets/images/frame-register-tablet.png';
import imgRegisterTabBest from '../../../assets/images/frame-register-tablet@2x.png';
import imgRegister from '../../../assets/images/frame-register.png';
import imgRegisterBest from '../../../assets/images/frame-register@2x.png';

export default function RegistrationPage() {
  return (
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
      marginTop="153px"
    >
      <RegistrationForm />
    </ContainerAuth>
  );
}
