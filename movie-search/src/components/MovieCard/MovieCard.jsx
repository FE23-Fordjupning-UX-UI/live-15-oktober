import "./MovieCard.css";
import { motion } from "framer-motion";

function MovieCard({ movie }) {
  //console.log(movie);
  const { Poster, Title, Year } = movie; // Object destructuring

  const movieCardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.article className="movie-card" variants={movieCardVariants}>
      <section>
        <img src={Poster} />
      </section>
      <section>
        <h3>{Title}</h3>
        <p>{Year}</p>
      </section>
    </motion.article>
  );
}

export default MovieCard;
