import s from './Header.module.css'

export const Header = () => {
  return ( 
    <header className={s.Header}>
    <h1 className={s.title}>Harry Potter</h1>
    <p className={s.article}>View all characters from the Harry Potter universe</p>
    </header>
  )

  }

  export default Header;