import styled from 'styled-components';
import { FlexContainer } from '../../../styles/StyledElements';

const NavigationWrapper = styled(FlexContainer)`
  width: 24.5rem;
`
const NavigationLink = styled.a`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${props => props.isFooter ?
        ({theme}) => theme.colors.footer_links :
        ({theme}) => theme.colors.opening_text
  };
  transition: all .3s ease-in-out;

  &:hover {
    color: ${props => props.isFooter ?
        ({theme}) => theme.colors.opening_text :
        ({theme}) => theme.colors.footer_links
  };
  }
`

export { NavigationWrapper, NavigationLink };