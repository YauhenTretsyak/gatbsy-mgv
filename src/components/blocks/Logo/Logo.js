import * as React from 'react';
import screen_breakpoints from '../../../styles/StyledElements/screen_breakpoints';
import styled from 'styled-components';

const LogoBlock = styled.h2`
  width: 100%;
  max-width: 8rem;
  font-size: 2.6rem;
  line-height: 3.8rem;
  font-weight: 900;

  ${ screen_breakpoints.lg } {
    ${props => props.isHeader ?
      'margin-left: -8.4rem;' :
      'margin-left: -2.4rem;'
    }
  }
`

const Logo = (props) => {

  const { title, isHeader } = props;

  return(
    <LogoBlock isHeader={ isHeader } >
      { title }
    </LogoBlock>
  )
}

export default Logo;