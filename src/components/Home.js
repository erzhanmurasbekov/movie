import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// API
import API from "../API/API";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config/config";

// Components
import HeroImage from "./HeroImage";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "../components/Button";
import GridOG from "./Grid/gridOg";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image fallback
import NoImage from "../images/no_image.jpg";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const slideUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 551 },
  exit: { opacity: 0, y: -20 },
  up: { opacity: 1, y: 76 },
};
const slideHero = {
  hidden: { opacity: 1, y: -430 },
  visible: { opacity: 1, y: 70 },
  exit: { opacity: 1, y: -400 },
  up: { opacity: 1, y: -500 },
};

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGrid(true);
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [state.results]); // Re-run the effect if the search results change

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }

  return (
    <React.Fragment>
      {/* HeroImage Animation */}
      <AnimatePresence>
        {!searchTerm && state.results[0] && (
          <motion.div
            variants={slideHero}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
              title={state.results[0].original_title}
              text={state.results[0].overview}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SearchBar Animation */}
      <motion.div
        key="search-bar"
        className="searchbar"
        variants={slideUp}
        initial="hidden"
        animate={searchTerm ? "up" : "visible"}
        exit="exit"
        transition={{ duration: 1.03, ease: "easeInOut" }}>
        <SearchBar setSearchTerm={setSearchTerm} setShowGrid={setShowGrid} />
      </motion.div>

      {/* Grid Animation */}
      <AnimatePresence>
        {showGrid ? (
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={searchTerm ? "up" : "visible"}
            exit="exit"
            className="grid-center"
            transition={{ duration: 1, ease: "easeInOut" }}>
            <GridOG header={searchTerm ? "Search Results" : "Popular Movies"}>
              {state.results.map((movie) => (
                <motion.div
                  key={movie.id}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}>
                  <Thumbnail
                    clickable
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : NoImage
                    }
                    movieId={movie.id}
                  />
                </motion.div>
              ))}
            </GridOG>
            {state.page < state.total_pages && !loading && (
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate={searchTerm ? "up" : "visible"}
                exit="exit"
                transition={{ duration: 0.87, ease: "easeInOut" }}
                style={{ padding: "10px" }}>
                <Button callback={() => setIsLoadingMore(true)}>
                  Load More
                </Button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate={searchTerm ? "up" : "visible"}
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}>
            <Spinner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spinner Animation */}
      {loading && (
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}>
          <Spinner />
        </motion.div>
      )}

      {/* Button Animation */}
    </React.Fragment>
  );
};

export default Home;
