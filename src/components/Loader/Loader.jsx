import { Rings } from 'react-loader-spinner'
import styled from 'styled-components';

const  StyledLoader = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* zIndex: 99; */

    ///
     @media screen and (max-width: 767px)
    /* @media screen and (max-width: var(--mobile-max)) */
    { width: 90px;
    }
`

export default function Loader() {
  return (
    <StyledLoader>
      <Rings color={'#24cca7'} width={150} height={150}
    ariaLabel='loading' /></StyledLoader>
  
  )
}