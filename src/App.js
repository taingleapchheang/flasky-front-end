import logo from "./logo.svg";
import "./App.css";
import CatList from "./components/CatList";
import Cat from "./components/Cat";
import { useState } from "react";

function App() {
  const [placeholder, setPlaceHolder] = useState("Hello");
  const catData1 = [
    {
      id: 1,
      name: "Jeff Thee Cat",
      saying: "rainbow 5evah",
      age: 5,
      color: "tan",
    },
    { id: 2, name: "Lily", saying: "rainbow 5evah", age: 5, color: "black" },
    { id: 3, name: "Richard", saying: "food", age: 5, color: "gray" },
    { id: 5, name: "John", saying: "rainbow 5evah", age: 5, color: "black" },
  ];

  // const catData2 = [
  //   { id: 1, name: "Jess", saying: "rainbow 5evah", age: 5, color: "tan" },
  //   { id: 2, name: "John", saying: "rainbow 5evah", age: 5, color: "black" },
  // ];

  const [cats, setCats] = useState(catData1);

  const handleAppClick = () => {
    setPlaceHolder(placeholder + "!");
  };

  const setCatAge = (id) => {
    console.log("inside setCatAge", id);
    const olderCats = [...cats];

    for (let cat of olderCats) {
      if (cat.id === id) {
        cat.age += 1;
      }
    }
    setCats(olderCats);
  };

  const deleteCat = (id) => {
    console.log("delete", id);
    const newCats = cats.filter((cat) => cat.id !== id);
    setCats(newCats);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Otters Flasky </h1>
      </header>
      <button onClick={handleAppClick}>{placeholder}</button>
      <main>
        <CatList
          catData={cats}
          setCatAgeCallBack={setCatAge}
          deleteCatCallback={deleteCat}
        />
        {/* <CatList catData={catData2} /> */}
      </main>
    </div>
  );
}

export default App;
