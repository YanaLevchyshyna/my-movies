const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTMxNTJlM2MxOWQ1YzU3NjQyMzVjZmFhMmU0MjJmMSIsInN1YiI6IjY0ZTU4ZTdhMWZlYWMxMDBhYjhlNTA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6MLKJDkEcuLx4u4b6W5X0t6JAySBDO73jvRSeD_w2g',
  },
};

async function fetchPopularMovies(lng, page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=${lng}&page=${page}`,
      options
    );
    // console.log('response fetch', response);

    if (!response.ok) {
      return Promise.reject(new Error(`Sorry, something went wrong...`));
    }

    const data = await response.json();
    // console.log('data POPULAR', data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchTrendingMovies(lng) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=${lng}`,
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

async function fetchMovieId(movieId, lng) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=${lng}`,
      options
    );
    // console.log('response fetchID', response);

    const data = await response.json();
    // console.log('data ID == ID', data);
    return data;
  } catch (error) {
    console.error('ERROR', error);
  }
}

async function fetchMovieActors(movieId, lng) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=${lng}`,
      options
    );
    // console.log('response fetchActor', response);

    const data = await response.json();
    // console.log('data ACTORS ACTORS', data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
}

async function fetchMovieReviews(movieId, lng) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=${lng}`,
      options
    );
    // console.log('reviews', response);

    const data = await response.json();
    // console.log('data reviews', data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
}

async function fetchSearchMovie(query, lng) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=${lng}&page=1`,
      options
    );
    // console.log('SEARCH QUERY', response);

    if (!response.ok) {
      return Promise.reject(new Error(`Sorry, something went wrong...`));
    }

    const data = await response.json();
    // console.log('SEARCH QUERY', data);
    return data;
  } catch (error) {
    console.error('ERROR', error);
  }
}

async function fetchMovieVideos(movieId) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    // console.log('reviews', response);

    const data = await response.json();
    console.log('data videos 111', data);
    return data;
  } catch (error) {
    console.log('ERROR', error);
  }
}
// fetchMovieVideos('634492', 'en-US');

const getApi = () => {
  return {
    fetchTrendingMovies,
    fetchMovieId,
    fetchMovieActors,
    fetchMovieReviews,
    fetchSearchMovie,
    fetchPopularMovies,
    fetchMovieVideos,
  };
};

export default getApi;
