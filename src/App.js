import React, { useEffect } from "react";

// 15573fa

const API_URL = "https://www.omdbapi.com?apikey=15573fa";

const App = () => {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    searchMovie("Spiderman");
  });
  return <h1>App</h1>;
};

export default App;
