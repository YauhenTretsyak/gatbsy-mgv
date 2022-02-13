import styled from 'styled-components';

const Overlay = styled.div`
  ${props => props.displayMenu ?
            'display: block;' :
            'display: none;'
  }
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: .5;
  background-color: ${({theme}) => theme.colors.btn_blue};
`

const AsideWrapper = styled.aside`
  position: fixed;
  top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3rem 1.5rem;
  width: 100%;
  max-width: 20rem;
  height: 25rem;
  border-radius: .2rem;
  ${props => props.displayMenu ? 
            'left: 50%; ' :
            'left: -650%; '
  }
  background-color: ${({theme}) => theme.colors.footer_background};
  transform: translateX(-50%);
  transition: all .3s ease-in-out;
  z-index: 100;
`
const NavigationLink = styled.a`
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
`

const CloseBtn = styled.p`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`

export { Overlay, AsideWrapper, NavigationLink, CloseBtn }