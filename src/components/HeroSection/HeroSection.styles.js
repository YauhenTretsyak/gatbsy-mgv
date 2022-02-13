import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { FlexContainer, SectionContainer, SectionTitle, Button } from '../../styles/StyledElements';
import top_bg from '../../images/background_top.png';

const HeroSectionWrapper = styled(SectionContainer)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -98px;
    left: 20.9%;
    width: 149rem;
    height: 116.1rem;
    background-image: url(${ top_bg });
    background-size: contain;
    z-index: -1;
  }
`
const HeroContent = styled.div`
  padding: 7rem 0 2rem 0;
  width: 100%;
  max-width: 53.9rem;

  ${ screen_breakpoints.md } {
    padding: 14.3rem 0 28.6rem 0;
  }

  ${ screen_breakpoints.xl } {
    padding: 24.3rem 0 38.6rem 0;
  }
`

const HeroSectionTitle = styled(SectionTitle)`
  margin-bottom: 2rem;
  font-size: 4rem;
  line-height: 5.6rem;
  font-weight: 500;

  ${ screen_breakpoints.md } {
    font-size: 5rem;
    line-height: 6.6rem;
  }
`
const HeroInfo = styled.p`
  margin-bottom: 1.8rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({theme}) => theme.colors.opening_text};

  ${ screen_breakpoints.md } {
    font-size: 1.8rem;
    line-height: 3rem;
  }
`
const HeroInfoSecondary = styled(HeroInfo)`
  margin-bottom: 2.9rem;

  ${ screen_breakpoints.md } {
    margin-bottom: 3.9rem;
  }

  ${ screen_breakpoints.lg } {
    margin-bottom: 6.9rem;
  }
`
const ButtonsWrapper = styled(FlexContainer)`
  justify-content: space-around;
  width: 100%;
  max-width: 40.8rem;

  ${ screen_breakpoints.xs } {
    justify-content: space-between;
  }
`

const ButtonLink = styled(Button)`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 18.9rem;
  height: 3.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;

  ${ screen_breakpoints.xs } {
    margin-bottom: 0;
  }
`

export {
  HeroSectionWrapper,
  HeroContent,
  HeroSectionTitle,
  HeroInfo,
  HeroInfoSecondary,
  ButtonsWrapper,
  ButtonLink
}