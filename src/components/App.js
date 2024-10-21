import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const stateReturn = useState(0)
  // console.log(stateReturn)
  // const counter = stateReturn[0]

  let counter = 0
  function handleDarkModeClick() {
    // setIsDarkMode((isDarkMode) => !isDarkMode);
    counter +=1
    console.log('counter', counter)

  }
  // console.log('counter', counter)

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
