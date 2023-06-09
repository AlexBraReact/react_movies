import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(event.target.value, this.state.type);
    }
  };
  handleType = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className="search-type">
          <label>
            <input
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleType}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleType}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleType}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
