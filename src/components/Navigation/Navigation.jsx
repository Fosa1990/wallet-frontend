import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import SVG from 'react-inlinesvg';
import {
  accentTextCl,
  poppinsFont,
  iconBgValueCl,
  iconBgCl,
  size,
} from '../../styles/stylesVars';
import home from '../../assets/images/svg/home.svg';
import diagram from '../../assets/images/svg/diagram.svg';
import currency from '../../assets/images/svg/currency.svg';

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
          render={() => <NavText>Statistics</NavText>}
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

const NavWrap = styled.div`
  width: 280px;
  padding-top: 15px;
  padding-bottom: 31px;
  display: flex;
  justify-content: ${props => props.justify || 'space-evenly'};
  ${size.tablet} {
    width: 336px;
    padding-top: 40px;
    padding-bottom: 28px;
    flex-direction: column;
    justify-content: ${props => props.justify || 'start'};
  }
  ${size.desktop} {
    width: 395px;
    padding-top: 0px;
  }
`;
const NavIcon = styled(SVG)`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  & path {
    fill: ${iconBgCl};
  }
  ${size.tablet} {
    width: 18px;
    height: 18px;
    margin-right: 23px;
    border-radius: 2px;
  }
`;
const NavText = styled.p`
  font-family: ${poppinsFont};
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
`;
const Link = styled(NavLink)`
  display: flex;
  font-weight: 400;
  line-height: 1.5;
  transition: font-weight 300ms;
  cursor: pointer;
  ${size.tablet} {
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: center;
    color: ${props => props.color || accentTextCl};
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
  &.active,
  &:hover ${NavIcon} {
    path {
      fill: ${iconBgValueCl};
    }
  }
  &.active ${NavText} {
    font-weight: 700;
  }
  &:hover ${NavText} {
    font-weight: 700;
  }
`;
