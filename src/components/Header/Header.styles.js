import styled from 'styled-components';
import screen_breakpoints from '../../styles/StyledElements/screen_breakpoints';
import { SectionContainer, Button, ImageContainer } from '../../styles/StyledElements';

const HeaderSection = styled(SectionContainer)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
`
const ButtonLink = styled(Button)`
  width: 100%;
  max-width: 16rem;
  height: 2.6rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
`

const MenuButton = styled(ImageContainer)`
  position: absolute;
  left: 4rem;
  top: 7rem;
  width: 2.3rem;
  z-index: 10;

  ${ screen_breakpoints.sm } {
    display: none;
  }
`

export { HeaderSection, ButtonLink, MenuButton }