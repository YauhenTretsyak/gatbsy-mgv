import styled from 'styled-components'
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints'
import { FlexContainer, SectionContainer, Button } from '../../styles/StyledElements'

const FooterSection = styled.footer`
  background: ${({theme}) => theme.colors.footer_background};
`
const FooterSectionWrapper = styled(SectionContainer)``

const FooterTopWrapper = styled(FlexContainer)`
  flex-wrap: wrap;
  padding: 3.1rem 0 3rem 0;

  ${ screen_breakpoints.xs } {
    flex-wrap: nowrap;
  }

  ${ screen_breakpoints.md } {
    padding: 4.1rem 0 4rem 0;
  }

  ${ screen_breakpoints.lg } {
    padding: 6.1rem 0 4rem 0;
  }
`

const CopyRights = styled.p`
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-align: center;
  color: #939EA4;

  ${ screen_breakpoints.xs } {
    flex-wrap: nowrap;
    margin-bottom: 0;
    max-width: 13.2rem;
    text-align: left;
  }
`
const ButtonLink = styled(Button)`
  width: 100%;
  max-width: 10.9rem;
  height: 2.6rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
`

const FooterBottomWrapper = styled(FlexContainer)`
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  border-top: .1rem solid #CDD1D4;

  ${ screen_breakpoints.xs } {
    justify-content: space-around;
  }

  ${ screen_breakpoints.sm } {
    justify-content: space-between;
  }
`

export {
  FooterSection,
  FooterSectionWrapper,
  FooterTopWrapper,
  CopyRights,
  ButtonLink,
  FooterBottomWrapper
}