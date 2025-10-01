import { useState, useEffect } from 'react';
import "../App.css";


function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  //reset flip for new cards
  useEffect(() => {
    setFlipped(false);
  }, [card]);
  
  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      {flipped ? card.answer : card.question}
    </div>
  );

}

export default Flashcard