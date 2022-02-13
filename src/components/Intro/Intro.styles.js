import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { ImageContainer, SectionContainer, SectionTitle, Button } from '../../styles/StyledElements';

const IntroWrapper = styled(SectionContainer)`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 1.5rem;
  min-height: 30.9rem;

  ${ screen_breakpoints.sm } {
    flex-wrap: nowrap;
  }

  ${ screen_breakpoints.md } {
    min-height: 56.9rem;
  }

  ${ screen_breakpoints.lg } {
    padding: 9rem 0 9rem 0;
  }
`
const IntroImage = styled(ImageContainer)`
  width: 100%;
  max-width: 54rem;
`
const IntroContent = styled.div`
  width: 100%;
  max-width: 44.5rem;
`
const IntroTitle = styled(SectionTitle)``

const IntroInfo = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({theme}) => theme.colors.column_text};
`
const ButtonLink = styled(Button)`
  margin-top: 4rem;
  width: 100%;
  max-width: 15rem;
  height: 3.2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
`

export {
  IntroWrapper,
  IntroImage,
  IntroContent,
  IntroTitle,
  IntroInfo,
  ButtonLink
}