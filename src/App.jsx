import { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard.jsx';


const App = () => {
  //can add consts here
  const cards = [
    {question: "Start", answer: ""},
    {question: "What are the two main types of Energy?", answer: "Kinetic and Potential"},
    {question: "If a system is absorbing heat it is...", answer: "Endothermic"},
    {question: "On the Electromagnetic Spectrum wavelength increases to the... ", answer: "Left"},
    {question: "What is the max number of valence electrons the f orbital can hold?", answer: "14"},
    {question: "Cobalent bonds ____ electrons and are typically formed between _________", answer: "Share, Nonmetals"},
    {question: "If the electronegativity difference between atoms is less than 0.4 the bond is...", answer: "Nonpolar"},
    {question: "If the electronegativity difference between atoms is between 0.4-1.8 the bond is...", answer: "Polar"},
    {question: "If the electronegativity difference between atoms is more than 1.8 the bond is...", answer: "Ionic"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    // make sure next card is different
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * cards.length)
    }
    setCurrentIndex(randomIndex);
  };

  return (
    <div className="App">
      <h2>Chemistry Flashcards</h2>
      <h4>Study Chemistry!</h4>
      <p>Number of cards: {cards.length}</p>

      <Flashcard card = {cards[currentIndex]}/>
      <button onClick={nextCard}>→</button>
    </div>
  )
}

export default App