import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import introMainDescriptionData from '../../dataComponents/IntroMainDescriptionData';
import { IntroMainDescription } from '../blocks';
import section_image from '../../images/intro_main.png';

import {
  IntroMainSectionWrapper,
  ContentWrapper,
  IntroMainInfo,
  IntroMainInfoSecondary,
  IntroMainTitle,
  DescrpiptionWrapper,
  IntroMainImage
} from './IntroMainSection.styles';


const IntroMainSection = () => {

  const descriptions = introMainDescriptionData.map(item => {
    return(
      <IntroMainDescription 
        key={ uuidv4() }
        image={ item.img }
        title={ item.title }
        text={ item.text }
      />
    )
  })

  return(
    <IntroMainSectionWrapper>
      <ContentWrapper>
        <IntroMainTitle>
          Light, Fast & Powerful
        </IntroMainTitle>
        <IntroMainInfo>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
        </IntroMainInfo>
        <IntroMainInfoSecondary>
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </IntroMainInfoSecondary>
        <DescrpiptionWrapper>
          { descriptions }
        </DescrpiptionWrapper>
      </ContentWrapper>
      <IntroMainImage>
        <img src={ section_image } alt='section image' />
      </IntroMainImage>
    </IntroMainSectionWrapper>
  )
}

export default IntroMainSection;