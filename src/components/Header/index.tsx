import { HeaderContainer } from './styled'
import { Scroll, Timer } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src="/logo.svg" alt="Logo do App" />

      <nav>
        <a href="#">
          <Timer size={32} />
        </a>
        <a href="#">
          <Scroll size={32} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
