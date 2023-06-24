import axios from "axios";

// const apikey = process.env.REACT_APP_APIKEY;
const apikey = '9e687de2304525bd4383dc1e1ddaf38a';
// const baseUrl = process.env.REACT_APP_BASEURL;
const baseUrl = `https://api.themoviedb.org/3`;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apikey}`);
  return movie.data.results
};

export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apikey}`);
  return search.data
};

