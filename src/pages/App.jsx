import { useEffect } from "react";
import logo from "../assets/devflix.png";
import searchIcon from "../assets/search.svg";
import menuIcon from "../assets/menu-outline.svg";
import Menu from "../componentes/menu/menu";

import { useState } from "react";

import "./App.css";
import MovieCard from "../componentes/movieCard/movieCard";
import Footer from "../componentes/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [menu, setMenu] = useState (true);

  const toggleMenu = () => {
    setMenu (!menu);
  }

  const apiKey = "e4d577fa";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("batman");

  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>
      <div className="searchMenu">
         <ion-icon name="menu-outline" onClick={toggleMenu}></ion-icon>
        {menu && <Menu toggleMenu={toggleMenu} />}
         <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder=""
          />
          <img
            src={searchIcon}
            alt="Icone de pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😥</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>@k.oliveira</Footer>
    </div>
  );
};

export default App;
