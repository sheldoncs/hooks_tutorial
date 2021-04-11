import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  state = {};
  componentDidMount() {
    console.log("context", this.context);
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => {
          return (
            <div>
              Movie List {userContext.name}
              <MovieRow />
            </div>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

MovieList.contextType = UserContext;
export default MovieList;
