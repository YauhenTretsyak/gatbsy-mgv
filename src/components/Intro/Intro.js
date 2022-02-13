import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  IntroWrapper,
  IntroImage,
  IntroContent,
  IntroTitle,
  IntroInfo,
  ButtonLink
} from './Intro.styles';


const Intro = (props) => {

  const { section_img, title, info, isButton } = props;

  const content = info.map(item => {
    return(
      <IntroInfo key={ uuidv4() }>
        { item.text }
      </IntroInfo>
    )
  });

  const btn = isButton ? <ButtonLink href='/'>Purchase Now</ButtonLink> : null;

  return(
    <IntroWrapper>
      <IntroImage>
        <img src={ section_img } alt='section_image' />
      </IntroImage>
      <IntroContent>
        <IntroTitle>
          { title }
        </IntroTitle>
        { content }
        { btn }
      </IntroContent>
    </IntroWrapper>
  )
}

export default Intro;