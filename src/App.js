import React, {useState, useEffect, useCallback} from "react";
import './App.css';
import { Card } from "./Card/Card";
import { Button } from "./Button/Button";


function App()  {

    const [cards, setCards] = useState([
        {id:1, eng: "dog", spa: "el perro"},
        {id:2, eng: "cat", spa: "el gato"},
        {id:3, eng: "towel", spa: "la toalla"},
        {id:4, eng: "hat", spa: "el gorro"},
        {id:5, eng: "man", spa: "el hombre"},
        {id:6, eng: "woman", spa: "la mujer"}
    ]);
    const [currentCard, setCurrentCard] = useState({})

    useEffect(() => {
        // const currentCards = cards;
        // setCards(currentCards);
        setCurrentCard(getRandomCard(cards));
    }, [cards])

    const getRandomCard = (cards) => {
        let card = cards[Math.floor(Math.random() * cards.length)]
        return (card);
    }

    const nextCard = () => {
        setCurrentCard(cards[Math.floor(Math.random() * cards.length)]);
    }

    return (
    <div className="App">
        <div className="cardRow" key={currentCard.id}>
            <Card eng={currentCard.eng}
              spa={currentCard.spa}/>
        </div>
        <div className="buttonRow">
            <Button onClick={nextCard}/>
        </div>
    </div>
  );
}

export default App;
