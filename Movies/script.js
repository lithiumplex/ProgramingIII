const API_KEY = 'b4be52e8';
const API_URL = `http://www.omdbapi.com/?`;
const searchl = document.getElementById("searchb")

async function searchMovies(searchText) {
  const response = await fetch(`${API_URL}s=${searchText}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search;
}

async function getMovieDetails(imdbID) {
  const response = await fetch(`${API_URL}&i=${imdbID}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
}

async function displayMovies(searchText) {
  const movies = await searchMovies(searchText);
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerHTML = '';
  for (const movie of movies) {
    const movieDetails = await getMovieDetails(movie.imdbID);
    const movieCard = document.createElement('div');
    movieCard.className="card"
    movieCard.innerHTML = `
      <img src="${movieDetails.Poster}" alt="${movieDetails.Title}">
      <h2>${movieDetails.Title}</h2>
    `;
    movieContainer.appendChild(movieCard);
  }
}
displayMovies("war");