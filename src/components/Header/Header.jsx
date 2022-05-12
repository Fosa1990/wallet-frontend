import styled from 'styled-components';
import { accentTextCl, textPlcholderCl, poppinsFont, circleFont,  size } from '../../stylesheet/utils/stylesVars';
import { NavLink, Link } from 'react-router-dom'

const StyledHeader = styled.div`
    display:flex ;
    justify-content: space-between;
`
const Logo = styled.div`
    display: flex;
`
const  Title =  styled.div`
font-family: ${poppinsFont};
  font-size: 25px;
  font-weight: 700;

  ${size.tablet}{
    font-size: 30px;
    line-height: 1,5;
  }
`
const LogoIcon = styled.img`
 `

const UserInfo = styled.div`
display: flex ;
font-family: ${circleFont};
font-size: 18px;
line-height: 1,47;
color: ${props => props.color || textPlcholderCl};

${size.tablet}{
    margin-top: 25px ;
    margin-bottom: 25px;
    margin-right: 32px;
}
${size.desktop}{
    margin-right: 16px;
}
   
`
const LogoutBtn = styled.button`
cursor: pointer;
width: 18px;
height: 18px;
font-size: 18px;
line-height: 1,47;
margin-left: 8px;
color: ${props => props.color || textPlcholderCl};
background-color: transparent;
padding-left: 12px;

${size.tablet}{
    /* width: 77px; */
    border: none; 
/* height: 30px;
margin-left: 12px;
border: none; 
/* border-left: 1px  solid  ${textPlcholderCl} ; */ */
}
`
const LogoutIcon = styled.img`
width: 18px;
height: 18px;
margin-right: 8px;`

const UserName = styled.p`
/* color: ${props => props.color || textPlcholderCl}; */
/* font-family: ${circleFont};
font-size: 18px;
line-height: 1,47;
color: ${textPlcholderCl} */
${size.tablet}{padding: 6px 12px 6px 0;
    border-right: 1px solid #bdbdbd;
    margin-right: 12px;} 


  
`

export default function Header() {
  return (
      <StyledHeader >
          <Logo>
              <LogoIcon />
              <Title>Wallet</Title>
          </Logo>
          <UserInfo>
              <UserName>Hello </UserName>
              <LogoutBtn><LogoutIcon/>Вийти</LogoutBtn >
          </UserInfo>
         
    </StyledHeader>
  )
} 