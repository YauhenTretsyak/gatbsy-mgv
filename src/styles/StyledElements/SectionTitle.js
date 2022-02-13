import styled from 'styled-components'
import screen_breakpoints from './screen_breakpoints'

const SectionTitle = styled.h3`
  margin-bottom: 1.6rem;
  font-size: 2.2rem;
  line-height: 3.2rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.column_title};

  ${ screen_breakpoints.md} {
    font-size: 3.6rem;
    line-height: 4.8rem;
  }
`

export default SectionTitle;