import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  state = {
    movies: [],

    SearchQuery: "",
  };

  //  ! 1 -  componentDidMount ile fetch yaptik get request
  // async componentDidMount() {
  //   const baseURL = "http://localhost:3002/movies";
  //   const response = await fetch(baseURL);
  //   const data = await response.json();
  //   console.log(response);
  //   console.log(data);
  //  this.setState({ movies: data });
  // }

  // ! 2- axios ile get requeest yapmak
  async componentDidMount() {
    const response = await axios.get("http://localhost:3002/movies");
    // console.log(response);
    this.setState({ movies: response.data });
    // console.log(this.state.movies);
  }

  // deleteMovie = (movie) => {
  //   const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

  //   // this.setState({
  //   //   movies: newMovieList,
  //   // });
  //   // console.log(this);   // App

  //   this.setState((state) => ({
  //     movies: newMovieList,
  //   }));
  // };

  // ! delete moviede fetchle yapitik sonradan axiosa cevirdik
  deleteMovie = async (movie) => {
   axios.delete(`http://localhost:3002/movies/${movie.id}`);

    const newMovieList = this.state.movies.filter(
      m => m.id !== movie.id
    );

    this.setState( state => ({
      movies:newMovieList
    }))
}

  searchMovie = (event) => {
    // ! burda arama motrorunun kodu inputdaki arama motorunun ve bu kodun devami asli renderin icinde
    // console.log(event.target.value);
    this.setState({ SearchQuery: event.target.value });
  };

  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      // ? arama motrunda kucuk harf buyuk harf olayi oldugu icin toLowerCase() fonksiyonun bununla def ediyoruz
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.SearchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies}
          // movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;
