import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { SectionContainer, SectionTitle, FlexContainer, ImageContainer } from '../../styles/StyledElements/';

const IntroMainSectionWrapper = styled(SectionContainer)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1.5rem;

  ${ screen_breakpoints.md } {
    padding: 5rem 0 5rem 0;
  }

  ${ screen_breakpoints.lg } {
    flex-wrap: nowrap;
    padding: 8rem 0 8rem 0;
  }

  ${ screen_breakpoints.xl } {
    padding: 10.7rem 0 12.3rem 0;
  }
`
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 54rem;
`

const IntroMainInfo = styled.p`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${({theme}) => theme.colors.column_text};
`
const IntroMainInfoSecondary = styled(IntroMainInfo)`
  margin-bottom: 3rem;

  ${ screen_breakpoints.md } {
    margin-bottom: 8rem;
  }
`

const IntroMainTitle = styled(SectionTitle)``

const DescrpiptionWrapper = styled(FlexContainer)`
  justify-content: center;
  width: 100%;
  max-width: 54rem;

  ${ screen_breakpoints.md } {
    justify-content: space-between;
  }
`

const IntroMainImage = styled(ImageContainer)`
  width: 100%;
  max-width: 54rem;

  ${ screen_breakpoints.md } {
    height: 52.43rem;
  }

  & > img {
    width: 100%;
  }
`

export {
  IntroMainSectionWrapper,
  ContentWrapper,
  IntroMainInfo,
  IntroMainInfoSecondary,
  IntroMainTitle,
  DescrpiptionWrapper,
  IntroMainImage
}