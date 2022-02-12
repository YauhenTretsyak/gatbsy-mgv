import * as React from 'react';
import styled from 'styled-components';

const LogoBlock = styled.h2`
  width: 100%;
  max-width: 8rem;
  font-size: 2.6rem;
  line-height: 3.8rem;
  font-weight: 900;
`

const Logo = (props) => {

  const { title } = props;

  return(
    <LogoBlock>
      { title }
    </LogoBlock>
  )
}

export default Logo;