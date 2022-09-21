import axios from 'axios';

const API_KEY = 'f128f86d2bf775a9e4af5bbb9b38ef94';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

//робимо асинк та повер результ тренд
const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};
//пошук за keyword
const fetchSearchByKeyword = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
  return response.data.results;
};

//тепер за ід деталі
const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

//дістаємо акторів
const fetchActors = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

//reviews
const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};


//експортуємо всіх
const Api = {
  fetchTrending,
  fetchSearchByKeyword,
  fetchMovieDetails,
  fetchActors,
  fetchReviews,
};

export default Api;