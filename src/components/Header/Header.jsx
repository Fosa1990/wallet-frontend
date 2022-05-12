import styled from 'styled-components';
import Media from 'react-media';
import { NavLink } from 'react-router-dom';
import { accentTextCl, textPlcholderCl, poppinsFont, circleFont,  size } from '../../stylesheet/utils/stylesVars';
import authSelectors from '../../redux/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';

const StyledHeader = styled.div`
    display:flex ;
    justify-content: space-between;
     width: 100%;
    height: 60px;
    padding: 15px 20px;
    ${size.tablet}{
    height: 80px; 
      padding: 20px 32px ;
    }
    ${size.desktop}{
      padding: 20px 16px ;   
    }
`
const Logo = styled.div`
    display: flex;
`
///TO DO   Logo   =  NavLink  to  / (Home)  

// const Logo = styled(NavLink)`
//     display: flex;
// `

const  Title =  styled.div`
font-family: ${poppinsFont};
  font-size: 25px;
  font-weight: 700;
  color: ${props => props.color || accentTextCl}; 

  ${size.tablet}{
    font-size: 30px;
    line-height: 1,5;
  }
`
const LogoIcon = styled.img`
 `

const UserInfo = styled.div`
display: flex ;
justify-content: ${props => props.justify || 'center'};
align-items: ${props=> props.align || 'center'};
font-family: ${circleFont};
font-size: 18px;
line-height: 1,47;
color: ${props => props.color || textPlcholderCl};  
`
const LogoutBtn = styled.button`
cursor: pointer;
display: flex;

/* width: 18px;
height: 18px; */
font-size: 18px;
line-height: 1,47;
color: ${props => props.color || textPlcholderCl};
background-color: transparent;
border:none;
padding-left: 12px;

${size.tablet}{
border: none; 
}
`
const LogoutIcon = styled.img`
width: 18px;
height: 18px;
margin-right: 8px;`

const UserName = styled.p`
color: ${textPlcholderCl} ;
${size.tablet}
{padding: 6px 12px 6px 0;
    border-right: 1px solid ${textPlcholderCl};
    margin-right: 12px;}
`
export default function Header() {
    // const isModalLogoutOpen =  useSelector(modalSelectors.getLogoutOpen)
    const userName = useSelector(authSelectors.getUserName)
    const dispatch = useDispatch()
    const handleClick = () => {
    //     dispatch(
    //        action  which  sets isModalLogoutOpen =  true 
    //    )
    }
    
  return (
      <StyledHeader >
          <Logo>
              <LogoIcon />
              <Title>Wallet</Title>
          </Logo>
          <UserInfo>
              <UserName>{userName || 'User'} </UserName>
              <LogoutBtn type='button' onClick={handleClick}>
                  <LogoutIcon />
                  <Media query="(min-width: 768px)" render={() =>
                    (<span>Logout</span>)}/>
              </LogoutBtn >
          </UserInfo>
          {/* {isModalLogoutOpen && <ModalLogout/>} */}
    </StyledHeader>
  )
} 