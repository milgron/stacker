import styles from '../styles/Home.module.css'
import StackedCards from '../components/StackedCards'
import {useState} from 'react'
const initialCards = require('../public/initialCards.json')

export default function Home() {
  const [cards,setCards] = useState(initialCards)

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.title}>StackedCards 0.1 (Alfa)</h1>
      <p className={styles.description}>This is an experimental component for stacked cards :)</p>
      <div className={styles.stackedWrapper}>
        <StackedCards cards={cards}/>
      </div>
    </div>
  )
}
