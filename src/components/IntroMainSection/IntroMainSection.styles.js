import styled from 'styled-components';
import { SectionContainer, SectionTitle, FlexContainer, ImageContainer } from '../../styles/StyledElements/';

const IntroMainSectionWrapper = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10.7rem 0 10.8rem 0;
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
  margin-bottom: 8rem;
`

const IntroMainTitle = styled(SectionTitle)``

const DescrpiptionWrapper = styled(FlexContainer)`
    width: 100%;
    max-width: 54rem;
`

const IntroMainImage = styled(ImageContainer)`
  width: 54rem;
  height: 52.43rem;

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