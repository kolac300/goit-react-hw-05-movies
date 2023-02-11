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

const products = [
  {
    id: 'h-1',
    name: 'Hoodie 1',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  {
    id: 'h-2',
    name: 'Hoodie 2',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  {
    id: 'h-3',
    name: 'Hoodie 3',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  {
    id: 's-1',
    name: 'Sneakers 1',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  {
    id: 's-2',
    name: 'Sneakers 2',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  {
    id: 's-3',
    name: 'Sneakers 3',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  {
    id: 's-4',
    name: 'Sneakers 4',
    cast: 'heroes 1234',
    reviews: 'ddddddddd',
  },
  { id: 'p-1', name: 'Pants 1', cast: 'heroes 1234', reviews: 'ddddddddd' },
  { id: 'p-2', name: 'Pants 2', cast: 'heroes 1234', reviews: 'ddddddddd' },
  { id: 'p-3', name: 'Pants 3', cast: 'heroes 1234', reviews: 'ddddddddd' },
];

export const getProducts = () => {
  return products;
};

export const getProductById = productId => {
  return products.find(product => product.id === productId);
};
// https://api.themoviedb.org/3/movie/550?api_key=fe02c0055a8ac0e9aa5bec4d6b45ebd7
