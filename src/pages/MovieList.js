import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

// console.log(movieAPI);
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.requestAPI();
  }

  requestAPI = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
