import * as React from 'react';
import { useContext } from 'react';
import { MenuMobileContext } from '../../context/MenuMobileContext';
import { v4 as uuidv4 } from 'uuid';
import navigationData from '../../dataComponents/navigationData';

import { Overlay, AsideWrapper, NavigationLink, CloseBtn } from './AsideMobileMenu.styles';


const AsideMobileMenu = () => {

  const { displayMenu, toDisplayMenu } = useContext(MenuMobileContext);

  const links = navigationData.map(item => {
    return(
      <NavigationLink 
        key={ uuidv4() }
        href={ item.url }
      >
        { item.title }
      </NavigationLink>
    )
  })

  return(
    <>
      <Overlay displayMenu={ displayMenu }/>
      <AsideWrapper displayMenu={ displayMenu }>
        <CloseBtn onClick={toDisplayMenu}>X</CloseBtn>
        { links }
      </AsideWrapper>
    </>
  )
}

export default AsideMobileMenu;