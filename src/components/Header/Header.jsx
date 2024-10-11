import s from './Header.module.css'
import { Container } from '../Container/Container';

export const Header = () => {
  return ( 
    <Container>
      <header className={s.Header}>
      <h1 className={s.title}>Harry Potter</h1>
      <p className={s.description}>View all characters from the Harry Potter universe</p>
      </header>
    </Container>
  )

  }

export default Header;