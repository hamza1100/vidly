import React from "react";

import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);
    this.setState({ movies });
  };

  getMessage = () => {
    let message = this.state.movies.length
      ? `Showing ${this.state.movies.length} `
      : "There are no ";
    return (message += "movies in the database.");
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = this.state.movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  toggleTable = () => {
    return this.state.movies.length ? (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col">Like</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {this.state.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><Like liked={movie.liked} onClick={() => this.handleLike(movie)}></Like></td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.handleDelete(movie._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div></div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <p>{this.getMessage()}</p>
        {this.toggleTable()}
      </React.Fragment>
    );
  }
}

export default Movies;
