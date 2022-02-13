import styled from 'styled-components';
import screen_breakpoints from './screen_breakpoints';
import bottom_bg from '../../images/backgound_bottom.png';

const MainPage = styled.div`
  position: relative;
  overflow-x: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 8.3rem;
    left: 43.08%;
    width: 124.693rem;
    height: 74.8rem;
    background-image: url(${ bottom_bg });
    background-size: cover;
    transform: translateX(-48.08%);
    z-index: -1;

    ${ screen_breakpoints.xs } {
      height: 69.8rem;
    }

    ${ screen_breakpoints.lg } {
      width: 254.693rem;
      height: 93.8rem;
    }
  }
`
export default MainPage;