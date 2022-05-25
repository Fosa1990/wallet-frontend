import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  size,
  accentBgCl,
  poppinsFont,
  bgTabletWalletCl,
} from '../../styles/stylesVars';

export default function ContainerAuth({
  imgTab,
  imgTabBest,
  img,
  imgBest,
  sizeDes,
  sizeTab,
  widthTab,
  heightTab,
  widthDes,
  heightDes,
  marginBot,
  marginTop,
  paddingTop,
  children,
}) {
  return (
    <Section>
      <Container>
        <DivTop marginTop={marginTop}>
          <Sidebar
            imgTab={imgTab}
            imgTabBest={imgTabBest}
            img={img}
            imgBest={imgBest}
            sizeTab={sizeTab}
            sizeDes={sizeDes}
            heightTab={heightTab}
            widthTab={widthTab}
            heightDes={heightDes}
            widthDes={widthDes}
            marginBot={marginBot}
          />
          <Text>Finance App</Text>
        </DivTop>
        <LoginFormWrap paddingTop={paddingTop}>{children}</LoginFormWrap>
      </Container>
    </Section>
  );
}

ContainerAuth.propTypes = {
  imgTab: PropTypes.string.isRequired,
  imgTabBest: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgBest: PropTypes.string.isRequired,
  sizeTab: PropTypes.string.isRequired,
  sizeDes: PropTypes.string.isRequired,
  heightTab: PropTypes.string.isRequired,
  widthTab: PropTypes.string.isRequired,
  heightDes: PropTypes.string.isRequired,
  widthDes: PropTypes.string.isRequired,
  marginBot: PropTypes.string,
  marginTop: PropTypes.string,
  children: PropTypes.node,
};

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
  ${size.tablet} {
    display: block;
    padding: 60px 20px 0 20px;
  }
  ${size.desktop} {
    display: flex;
    align-items: start;
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
    margin: ${props => props.marginTop || '150px'} 38px 0 76px;
  }
`;
const LoginFormWrap = styled.div`
  ${size.tablet} {
    display: flex;
    justify-content: center;
  }
  ${size.desktop} {
    width: 100%;
    height: 100vh;
    justify-content: center;
    padding-left: 107px;
    padding-right: 91px;
    padding-top: ${props => props.paddingTop || '136px'};
    background-color: ${props => props.color || bgTabletWalletCl};
    backdrop-filter: blur(50px);
  }
`;
const Sidebar = styled.div`
  ${size.tablet} {
    background-image: url(${props => props.imgTab});
    background-repeat: no-repeat;
    background-size: ${props => props.sizeTab};
    height: ${props => props.heightTab};
    width: ${props => props.widthTab};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props => props.imgTabBest});
    }
  }
  ${size.desktop} {
    margin-bottom: ${props => props.marginBot || '28px'};
    background-image: url(${props => props.img});
    background-size: ${props => props.sizeDes};
    height: ${props => props.heightDes};
    width: ${props => props.widthDes};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props => props.imgBest});
    }
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
