import * as React from 'react';
import { createContext, useState } from 'react';

export const MenuMobileContext = createContext()

const MenuContextProvider = (props) => {

  const [displayMenu, setDisplayMenu] = useState(false)

  const toDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
    console.log(displayMenu)
  }

  return (
    <MenuMobileContext.Provider value={{displayMenu, toDisplayMenu}}>
      { props.children }
    </MenuMobileContext.Provider>
  )
}

export default MenuContextProvider;