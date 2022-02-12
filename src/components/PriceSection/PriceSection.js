import * as React from 'react';

import {
  PriceSectionWrapper,
  PriceSectionTitle,
  Description,
  PriceValue,
  PriceDescription,
  ButtonDescription,
  ButtonLink
} from './PriceSection.styles';


const PriceSection = () => {
  return(
    <PriceSectionWrapper>
      <PriceSectionTitle>
        A Price To Suit Everyone
      </PriceSectionTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
      </Description>
      <PriceValue>
        $40
      </PriceValue>
      <PriceDescription>
        UI Design Kit
      </PriceDescription>
      <ButtonDescription>
        See, One price. Simple.
      </ButtonDescription>
      <ButtonLink>
        Purchase Now
      </ButtonLink>
    </PriceSectionWrapper>
  )
}

export default PriceSection;