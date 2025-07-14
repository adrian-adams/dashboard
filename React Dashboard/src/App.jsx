import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getCards } from "./firebase/cardService";

const App = () => {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const data = await getCards();
      console.log(data);
      setCards(data);
    };
    fetchCards();
  }, []);

    return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Your Resources</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App
