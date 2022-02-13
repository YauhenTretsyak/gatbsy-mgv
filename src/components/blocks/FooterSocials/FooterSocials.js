import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import footerSocialsData from '../../../dataComponents/footerSocialsData';

import styled from 'styled-components';
import { FlexContainer } from '../../../styles/StyledElements';

const FooterSocialsWrapper = styled(FlexContainer)`
  width: 100%;
  max-width: 19.5rem;
`
const SocialsLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: .8rem;
  color: ${({theme}) => theme.colors.grey};

  &:hover {
    color: ${({theme}) => theme.colors.column_title};
  }
`

const FooterSocials = () => {

  const socials = footerSocialsData.map(item => {
    return(
      <SocialsLinks
        key={ uuidv4() }
        href={ item.url }
      >
        { item.img }
      </SocialsLinks>
    )
  })

  return(
    <FooterSocialsWrapper>
      { socials }
    </FooterSocialsWrapper>
  )
}

export default FooterSocials;