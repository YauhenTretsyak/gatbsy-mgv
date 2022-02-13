import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { SectionTitle, Button } from '../../styles/StyledElements';

const PriceSectionWrapper = styled.section`
  margin: 0 auto;
  padding: 10.5rem 1.5rem 10.2rem 1.5rem;
  width: 100%;
  max-width: 60rem;
  text-align: center;

  ${ screen_breakpoints.md } {
    padding: 13.5rem 0 13.2rem 0;
  }

  ${ screen_breakpoints.lg } {
    padding: 27.5rem 0 17.2rem 0;
  }
`

const PriceSectionTitle = styled(SectionTitle)`
  margin-bottom: 1.6rem;
`
const Description = styled.p`
  margin-bottom: 3.6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 400;
  color: ${({theme}) => theme.colors.column_text};
`

const PriceValue = styled.p`
  font-size: 5rem;
  font-weight: 500;
  line-height: 6.6rem;
  letter-spacing: .1rem;
  color: #222F65;
`
const PriceDescription = styled.p`
  margin-bottom: 6rem;
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: #37447E;
`

const ButtonDescription = styled.p`
  margin-bottom: .9rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({theme}) => theme.colors.main_grey};
`

const ButtonLink = styled(Button)`
  margin: 0 auto;
  width: 100%;
  max-width: 18.9rem;
  height: 3.2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 500;
`

export {
  PriceSectionWrapper,
  PriceSectionTitle,
  Description,
  PriceValue,
  PriceDescription,
  ButtonDescription,
  ButtonLink
}