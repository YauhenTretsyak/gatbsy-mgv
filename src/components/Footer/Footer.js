import * as React from 'react'
import { Navigation, FooterSocials, Logo } from '../blocks'

import {
  FooterSection,
  FooterSectionWrapper,
  FooterTopWrapper,
  CopyRights,
  ButtonLink,
  FooterBottomWrapper
} from './Footer.styles';


const Footer = () => {
  return(
    <FooterSection>
      <FooterSectionWrapper as='div'>
        <FooterTopWrapper>
          <CopyRights>
            ©2020 Yourcompany
          </CopyRights>
          <Logo title={ 'Landie' } />
          <ButtonLink>
            Purchase now
          </ButtonLink>
        </FooterTopWrapper>
        <FooterBottomWrapper>
          <Navigation isFooter={ true } />
          <FooterSocials />
        </FooterBottomWrapper>
      </FooterSectionWrapper>
    </FooterSection>
  )
}

export default Footer;