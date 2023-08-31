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
    // console.log('response fetch', response);

    if (!response.ok) {
      return Promise.reject(new Error(`Sorry, something went wrong...`));
    }

    const data = await response.json();
    // console.log('data trending', data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchMovieId(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    );
    // console.log('response fetchID', response);

    const data = await response.json();
    console.log('data ID == ID', data);
    return data;
  } catch (error) {
    console.error('ERROR', error);
  }
}

async function fetchMovieActors(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      options
    );
    console.log('response fetchActor', response);

    const data = await response.json();
    console.log('data ACTORS ACTORS', data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
}

async function fetchMovieReviews(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US`,
      options
    );
    console.log('reviews', response);

    const data = await response.json();
    console.log('data reviews', data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
}

const getApi = () => {
  return {
    fetchTrendingMovies,
    fetchMovieId,
    fetchMovieActors,
    fetchMovieReviews,
  };
};

export default getApi;
