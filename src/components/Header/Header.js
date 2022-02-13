import * as React from 'react';
import { useContext } from 'react';
import { MenuMobileContext } from '../../context/MenuMobileContext';
import { Navigation, Logo } from '../blocks';
import burger_icon from '../../images/icons/burger-menu-icon.png';

import { HeaderSection, ButtonLink, MenuButton } from './Header.styles';

const Header = () => {
  const { toDisplayMenu } = useContext(MenuMobileContext);

  return(
    <HeaderSection as='header'>
      <MenuButton onClick={ toDisplayMenu } >
        <img src={ burger_icon } alt='burger_icon' />
      </MenuButton>
      <Navigation />
      <Logo 
        isHeader={ true }
        title={ 'Landie' } 
      />
      <ButtonLink>
        Buy Now
      </ButtonLink>
    </HeaderSection>
  )
}

export default Header;