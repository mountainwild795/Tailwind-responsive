import React, { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <Navbar />
      <Newsletter onSearch={setSearch} />
      <Cards search={search} />
    </div>
  );
}

export default App;

