import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styled'
import { Scroll, Timer } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="Logo do App" />

      <nav>
        <NavLink to="/" title="home">
          <Timer size={32} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={32} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
