import styled from 'styled-components';
import screen_breakpoints from '../../../styles/StyledElements/screen_breakpoints';
import { ImageContainer, SectionTitle } from '../../../styles/StyledElements';

const IntroWrapper = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 25.5rem;

  ${ screen_breakpoints.sm } {
    margin-bottom: 0;
  }
`

const IntroImage = styled(ImageContainer)`
  margin-bottom: 1.4rem;
  width: 3.6rem;
  height: 3.6rem;
`

const IntroTitle = styled(SectionTitle)`
  margin-bottom: .6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
`

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({theme}) => theme.colors.main_grey};
`

export { IntroWrapper, IntroImage, IntroTitle, IntroText }