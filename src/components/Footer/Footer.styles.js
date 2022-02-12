import styled from 'styled-components'
import { FlexContainer, SectionContainer, Button } from '../../styles/StyledElements'

const FooterSection = styled.footer`
  background: ${({theme}) => theme.colors.footer_background};
`
const FooterSectionWrapper = styled(SectionContainer)``

const FooterTopWrapper = styled(FlexContainer)`
  padding: 6.1rem 0 4rem 0;
`

const CopyRights = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: #939EA4;
`
const ButtonLink = styled(Button)`
  width: 100%;
  max-width: 10.9rem;
  height: 2.6rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
`

const FooterBottomWrapper = styled(FlexContainer)`
  padding: 2rem 0;
  width: 100%;
  border-top: .1rem solid #CDD1D4;
`

export {
  FooterSection,
  FooterSectionWrapper,
  FooterTopWrapper,
  CopyRights,
  ButtonLink,
  FooterBottomWrapper
}