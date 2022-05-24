import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Media from 'react-media';
import SVG from 'react-inlinesvg';
import {
  accentTextCl,
  poppinsFont,
  iconBgValueCl,
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
  display: flex;
  width: 280px;
  justify-content: ${props => props.justify || 'space-evenly'};
  margin-top: 15px;
  margin-bottom: 31px;
  ${size.tablet} {
    flex-direction: column;
    width: 336px;
    justify-content: ${props => props.justify || 'start'};
    margin-top: 40px;
    margin-bottom: 28px;
  }
  ${size.desktop} {
    margin-top: 0px;
    width: 395px;
  }
`;

const NavIcon = styled(SVG)`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  & path {
    fill: #6e78e8;
  }
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
  line-height: 1.5;
  cursor: pointer;
  transition: font-weight 300ms;
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
