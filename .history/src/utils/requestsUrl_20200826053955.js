const API_KEY = "641aef8bfa01c60ca1f37f2125893261";

export default {
  fetchTrending: `/trending/all/week/?${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?${API_KEY}&language=en-US`,
  fetchAction: `/discover/movie?${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?${API_KEY}&with_genres=9648`,
  fetchSci: `/discover/movie?${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?${API_KEY}&with_genres=16`,
  fetchTb: `/discover/movie?${API_KEY}&with_genres=10770`,
};
