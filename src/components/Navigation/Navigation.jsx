import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Media from 'react-media';
import {
  accentTextCl,
  poppinsFont,
  size,
} from '../../stylesheet/utils/stylesVars';
import home from '../../images/svg/home.svg';
import diagram from '../../images/svg/diagram.svg';
import currency from '../../images/svg/currency.svg';

// import sprite from '../../images/svg/sprite.svg';
// import Icon from '../Icon';

export default function Navigation() {
  return (
    <NavWrap>
      <Link to="home">
        <NavIcon src={home} />
        <Media
          query="(min-width: 768px)"
          render={() => <NavText>Home</NavText>}
        />
      </Link>
      <Link to="diagram">
        <NavIcon src={diagram} />
        <Media
          query="(min-width: 768px)"
          render={() => <NavText>DashBoard</NavText>}
        />
      </Link>
      <Media
        query="(max-width: 767px)"
        render={() => (
          <Link to="currency">
            <NavIcon src={currency} />
          </Link>
        )}
      />
    </NavWrap>
  );
}

// const StyledIcon = styled(Icon)`
//       border-radius: 15px;
//       margin-right: 25px;

// `
// const svgStyles = ({ width, height, color, activeColor }) => {
//     return css`
//         width:  38px;
//     height: 38px;
//     border-radius: 6px;
//     & path {
//         fill: ${ color || '#6e78e8 ' }
//     }
//     &:hover path {
//         fill: ${ color || 'red ' }
//     }
//     `
// }
// const Img = styled.img`
// ${(props =>svgStyles(props) )}
// `

const NavWrap = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'space-evenly'};
  margin-top: 15px;
  margin-bottom: 31px;
  ${size.tablet} {
    flex-direction: column;
    justify-content: ${props => props.justify || 'start'};
    margin-top: 40px;
    margin-bottom: 28px;
  }
`;
const NavIcon = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 6px;

  ${size.tablet} {
    width: 18px;
    height: 18px;
    border-radius: 2px;
    margin-right: 23px;
  }
`;

const NavText = styled.p`
  font-size: 18px;
  line-height: 1, 5;
  font-weight: 400;
  font-family: ${poppinsFont};
`;

const Link = styled(NavLink)`
  display: flex;
  font-weight: 400;
  /* justify-content: ${props => props.justify || 'space-around'}; */
  cursor: pointer;

  ${size.tablet} {
    justify-content: ${props => props.justify || 'flex-start'};
    color: ${props => props.color || accentTextCl};
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  ///change icon  fill on hover  /  active ????
  &.active ${NavIcon} {
    /* font-weight: 700; */
    /* & path {
    fill: #6e78e8;
 */
  }
  &:hover,
  &.active ${NavText} {
    font-weight: 700;
  }
`;
