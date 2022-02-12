import * as React from 'react';

import {
  HeroSectionWrapper,
  HeroContent,
  HeroSectionTitle,
  HeroInfo,
  HeroInfoSecondary,
  ButtonsWrapper,
  ButtonLink
} from './HeroSection.styles';

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