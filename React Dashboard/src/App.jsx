import { useEffect, useState } from 'react'
import { getCards } from "./firebase/cardService"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import 'flowbite'
import FavouritesMenu from './components/FavouritesMenu'
import SearchBar from './components/SearchBar'
import Spinner from './components/Spinner'
import DrawerMenu from './components/DrawerMenu'
import ResCard from './components/ResCard'
import AddCard from './components/AddCard'
import AddResource from './components/AddResource'

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
    // <div className="p-4">
    //   <h1 className="mb-4 text-xl font-bold">Your Resources</h1>
    //   <ul>
    //     {cards.map((card) => (
    //       <li key={card.id}>{card.imageurl} <img src={card.imageurl} alt="" /></li>
    //     ))}
    //   </ul>
    // </div>
    <>
      <header>
        <nav className='dash-nav'>
          <FavouritesMenu />
          <SearchBar />
        </nav>
        <section>
        </section>
      </header>
      <main>
        <Spinner />
        <AddCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </main>
    </>

  );
}

export default App
