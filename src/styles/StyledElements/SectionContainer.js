import styled from 'styled-components';
import screen_breakpoint from './screen_breakpoints';

const SectionContainer = styled.section`
  margin: auto;
  padding: 0 1.5rem;
  width: 100%;
  max-width: 111rem;

  ${ screen_breakpoint.xl } {
    padding: 0;
  }
`;

export default SectionContainer;