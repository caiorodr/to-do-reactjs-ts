import styles from './Header.module.css';
import logoToDo from '../assets/Logo.svg';

export function Header() {
  return ( 
    <header className={styles.header}>
      <img src={logoToDo} alt="Logo"/>
    </header>
  )
}