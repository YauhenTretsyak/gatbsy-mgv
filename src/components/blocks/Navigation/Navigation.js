import * as React from 'react';
import navigationData from '../../../dataComponents/navigationData';
import { v4 as uuidv4 } from 'uuid';
import { NavigationWrapper, NavigationLink } from './Navigation.styles'

const Navigation = (props) => {
  const { isFooter } = props;

  const links = navigationData.map(item => {
    return(
      <NavigationLink
        key={ uuidv4() }
        href={ item.url }
        isFooter={ isFooter }
      >
        { item.title }
      </NavigationLink>
    )
  })

  return(
    <NavigationWrapper as='nav'>
      { links }
    </NavigationWrapper>
  )
}

export default Navigation;