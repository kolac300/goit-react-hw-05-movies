import axios from 'axios';
export const PopularToday = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7`
  );
  return response.data;
};
export const SearchMovies = async searchParam => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US&query=${searchParam}&page=1&include_adult=false`
  );
  return response.data;
};

export const getDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US`
  );
  return response.data;
};
export const getCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US`
  );
  return response.data;
};
export const getReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US&page=1`
  );
  return response.data;
};
export const getImg = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7&language=en-US`
  );
  return response.data;
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/550?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7
