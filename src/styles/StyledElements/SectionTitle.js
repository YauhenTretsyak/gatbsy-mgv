import styled from 'styled-components'
// import screen_breakpoint from './screen_breakpoints'

const SectionTitle = styled.h3`
  font-size: 3.6rem;
  line-height: 4.8rem;
  font-weight: 500;
  color: ${({theme}) => theme.colors.column_title}
`

export default SectionTitle;