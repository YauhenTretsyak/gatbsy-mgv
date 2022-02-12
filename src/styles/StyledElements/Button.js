import styled, { css } from 'styled-components';

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.btn_blue};
  transition: all .3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.column_text};
  }

${({secondary}) => 
    secondary && 
    css`
    border: .2rem solid ${({theme}) => theme.colors.column_title};
    color: ${({theme}) => theme.colors.column_title};
    background-color: ${({theme}) => theme.colors.white};

    &:hover {
      color: ${({theme}) => theme.colors.white};
    }
  `}
`

export default Button;