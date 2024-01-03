import styled from 'styled-components'
import { HeaderContainer } from '../../components/Header/styled'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['--gray-800']};
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 2.5rem auto;

  ${HeaderContainer} {
    padding-top: 2.5rem;
  }
`
