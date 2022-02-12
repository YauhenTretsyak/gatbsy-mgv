import styled from 'styled-components';
import { SectionContainer, Button } from '../../styles/StyledElements';

const HeaderSection = styled(SectionContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`
const ButtonLink = styled(Button)`
  width: 100%;
  max-width: 16rem;
  height: 2.6rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export { HeaderSection, ButtonLink }