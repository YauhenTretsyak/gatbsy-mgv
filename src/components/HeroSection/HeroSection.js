import * as React from 'react';

import styled from 'styled-components';
import { FlexContainer, SectionContainer, SectionTitle, Button } from '../../styles/StyledElements';
import top_bg from '../../images/background_top.png';

const HeroSectionWrapper = styled(SectionContainer)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -79px;
    left: 21.5%;
    width: 149rem;
    height: 116.1rem;
    background-image: url(${ top_bg });
    background-size: contain;
    z-index: -1;
  }
`
const HeroContent = styled.div`
  padding: 24.3rem 0 38.6rem 0;
  width: 100%;
  max-width: 53.9rem;
`

const HeroSectionTitle = styled(SectionTitle)`
  margin-bottom: 2rem;
  font-size: 5rem;
  line-height: 6.6rem;
  font-weight: 500;
`
const HeroInfo = styled.p`
  margin-bottom: 1.8rem;
  font-size: 1.8rem;
  line-height: 3rem;
  color: ${({theme}) => theme.colors.opening_text};
`
const HeroInfoSecondary = styled(HeroInfo)`
  margin-bottom: 6.9rem;
`
const ButtonsWrapper = styled(FlexContainer)`
  width: 100%;
  max-width: 40.8rem;
`

const ButtonLink = styled(Button)`
  width: 100%;
  max-width: 18.9rem;
  height: 3.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
`

const HeroSection = () => {
  return(
    <HeroSectionWrapper>
      <HeroContent>
        <HeroSectionTitle as='h1'>
          Introduce Your Product Quickly & Effectively
        </HeroSectionTitle>
        <HeroInfo>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        </HeroInfo>
        <HeroInfoSecondary>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </HeroInfoSecondary>
        <ButtonsWrapper>
          <ButtonLink>
            Purchase UI Kit
          </ButtonLink>
          <ButtonLink secondary>
            Learn More
          </ButtonLink>
        </ButtonsWrapper>
      </HeroContent>
    </HeroSectionWrapper>
  )
}

export default HeroSection;