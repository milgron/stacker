import { useState } from 'react'
import styles from '../styles/StackedCards.module.scss'

export default function StackedCards({cards}) {
  const [activeCard, setActiveCard] = useState(5)
  
  const reversedArray = cards.reverse()

  const getCardPosition = (card) => {
    const index = cards.indexOf(card) + 1
    return index
  }
  
  const handleCardClick = (card) => {
    const index = cards.indexOf(card)
    setActiveCard(index+1)
  }

  return(
    <div className={`${styles.stackedCardsWrapper} ${styles[`active-card-${activeCard}`]}`}>
      {reversedArray.map((card) => 
        <div 
          key={getCardPosition(card)}
          className={`${styles.stackedCard} ${styles.card} ${styles[`card-${getCardPosition(card)}`]}`} 
          onClick={() => handleCardClick(card)}
        >
          <p>{card.title}</p>
        </div>
      )}
    </div>
  )
}