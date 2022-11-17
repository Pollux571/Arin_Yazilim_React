import React from "react";

class SearchBar extends React.Component {


  handleFormSubmit = (event) =>{
    event.preventDefault();
  }

  render() {
    return (
      //  boylede yazsak olurdu ayri bi fonksiyon yazmaya gerek kalmazdi <form onSubmit={(event) => event.preventDefault()}>
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mb-5 mt-5">
          <div className="col-12">
            <input
              type="text"
              onChange={this.props.searchMovieProp}
              className="form-control"
              placeholder="Search a Movie"
            //   value={this.state.searchQuery} // bu sekilde biz value control altina aldik
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
