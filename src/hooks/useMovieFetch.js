import { useState, useEffect } from "react";
import API from "../API/API";

// Helpers
import { isPersistedState } from "../helpers/helpers";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({ actors: [], directors: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch movie details and credits
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // Filter directors from credits
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        // Update state with movie details, actors, and directors
        setState({
          ...movie,
          actors: credits.cast || [], // Default to an empty array if undefined
          directors: directors || [], // Default to an empty array if undefined
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError(true);
        setLoading(false); // Ensure loading is set to false even if there's an error
      }
    };

    // Check if data is in sessionStorage
    const sessionState = isPersistedState(movieId);

    if (sessionState) {
      console.log("Grabbing movieId from sessionStorage");
      setState(sessionState);
      setLoading(false);
    } else {
      fetchMovie();
    }
  }, [movieId]);

  // Write to sessionStorage when state changes
  useEffect(() => {
    if (state && movieId) {
      sessionStorage.setItem(movieId, JSON.stringify(state));
    }
  }, [state, movieId]);

  return { state, loading, error };
};
