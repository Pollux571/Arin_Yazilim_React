import React from "react";

const MovieList = (props) => {

    // function handleClick(event){
    //     // console.log("hello world");
    //        console.log(event.pageX);
    // }


  return (
    <div className="row">
      {props.movies.map((movie) => (
        <div className="col-lg-4" key={movie.id}>
          <div className="card mb-4 shadow-sm">
            <img
              src={movie.imageURL}
              alt="Sample Movie"
              className="car-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-md btn-outline-danger" onClick={(event)=> props.deleteMovieProp(movie)} type="button">
                  Delete
                </button>
                <h2>
                  <span className="badge text-bg-success">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
