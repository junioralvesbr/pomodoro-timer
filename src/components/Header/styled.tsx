import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2.5rem;

  & > nav {
    display: flex;
    gap: 0.5rem;

    & > a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme['--green-500']};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: border-bottom 200ms linear;

      &:hover {
        border-bottom-color: ${(props) => props.theme['--green-500']};
      }
    }
  }
`
