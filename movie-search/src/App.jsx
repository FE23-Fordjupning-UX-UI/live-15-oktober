import { useState, useEffect } from "react";
import "./App.css";
import { motion } from "framer-motion";

import MovieCard from "./components/MovieCard/MovieCard";

function App() {
  const title = "Movie search";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=37fe945a&s=Harry%20Potter"
      );
      const data = await response.json();

      setTimeout(() => {
        // Används mest för att visa laddningsannimationen tydligare då svaret kommer så fort annars
        setMovies(data.Search);
      }, 2000);
    }
    if (movies.length === 0) getMovies();
  }, []);

  const movieCardComps = movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.imdbID} />;
  });

  const movieVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Fördröjning mellan barnanimationer
      },
    },
  };

  return (
    <main>
      <h2>{title}</h2>
      {movies.length === 0 ? (
        <motion.div
          className="loader"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
          }}
          transition={{ repeat: Infinity }}
        ></motion.div>
      ) : (
        <motion.section
          initial="hidden"
          animate="visible"
          variants={movieVariants}
          className="movie-cards"
        >
          {movieCardComps}
        </motion.section>
      )}
    </main>
  );
}

export default App;
