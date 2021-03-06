import * as React from 'react';
import { IntroWrapper, IntroImage, IntroTitle, IntroText } from './IntroMainDescription.styles';


const IntroMainDescription = (props) => {
  const { imgIntro, title, text } = props;

  return(
    <IntroWrapper>
      <IntroImage>
        <img src={ imgIntro } alt='icon' />
      </IntroImage>
      <IntroTitle>
        { title }
      </IntroTitle>
      <IntroText>
        { text }
      </IntroText>
    </IntroWrapper>
  ) 
}

export default IntroMainDescription;