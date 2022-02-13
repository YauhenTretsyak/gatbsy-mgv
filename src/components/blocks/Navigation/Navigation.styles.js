import styled from 'styled-components';
import screen_breakpoints from '../../../styles/StyledElements/screen_breakpoints';
import { FlexContainer } from '../../../styles/StyledElements';

const NavigationWrapper = styled(FlexContainer)`
  width: 100%;

  ${props => props.isFooter ? 
    'max-width: 19.4rem; margin-bottom: 1.5rem;' : 
    'display: none;'
  }

${ screen_breakpoints.xs } {
    ${props => props.isFooter ? 
    'margin-bottom: 0' : 
    ''
    }
  }

  ${ screen_breakpoints.sm } {
    ${props => props.isFooter ? 
    '' : 
    'display: flex; max-width: 15.5rem;'
    }
  }

  ${ screen_breakpoints.md } {
    max-width: 24.5rem;
  }
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