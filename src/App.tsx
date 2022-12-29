import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';
import { Task } from './components/Task';
import { Info } from './components/Info';

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Task/>
        <Info/>
      </div>
    </div>
  )
}
