const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g',
  },
};

async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    console.log('response', response);

    if (!response.ok) {
      throw new Error(
        `Sorry, there are no movies matching your search query. Please try again.`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

async function fetchMovieId(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );

    const data = await response.json();
    console.log('data == data', data);
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

const getApi = () => {
  return { fetchTrendingMovies, fetchMovieId };
};

export default getApi;
