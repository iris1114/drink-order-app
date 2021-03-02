import React, { useState } from "react";
import { v4 } from "uuid";
import DrinkCard from "./DrinkCard.jsx";
import DrinkInputGroup from "./DrinkInputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const App = () => {
  const defaultDrinks = [
    {
      name: "烏龍綠",
      options: "半糖去冰",
      buyer: "iris"
    },
    {
      name: "珍奶",
      options: "無糖少冰",
      buyer: "nicole"
    }
  ];
  const [drinks, setDrinks] = useState(defaultDrinks);

  const handleDrinkCreate = (drink) => {
    setDrinks([...drinks, drink]);
  };

  const handleDrinkDelete = (index) => {
    setDrinks([...drinks.slice(0, index), ...drinks.slice(index + 1)]);
  };

  return (
    <main className="py-5">
      <div className="container">
        <DrinkInputGroup onCreate={handleDrinkCreate} />
        {drinks.map((drink, index) => (
          <DrinkCard
            key={v4()} 
            index={index}
            buyer={drink.buyer}
            name={drink.name}
            options={drink.options}
            onDelete={handleDrinkDelete}
          />
        ))}
        {!drinks.length && <div>目前沒有訂購任何飲料</div>}
      </div>
    </main>
  );
};

export default App;

