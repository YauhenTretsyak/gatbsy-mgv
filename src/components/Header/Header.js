import * as React from 'react';
import { Navigation, Logo } from '../blocks';

import { HeaderSection, ButtonLink } from './Header.styles';

const Header = () => {
  return(
    <HeaderSection as='header'>
      <Navigation />
      <Logo title={ 'Landie' } />
      <ButtonLink>
        Buy Now
      </ButtonLink>
    </HeaderSection>
  )
}

export default Header;