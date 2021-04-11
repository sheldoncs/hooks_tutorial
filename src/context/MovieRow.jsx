import React, { useContext, useCosntext } from "react";
import UserContext from "./userContext";

const MovieRow = () => {
  const currentUser = useContext(UserContext);
  console.log(currentUser);
  return <div>{currentUser.name}</div>;
};

export default MovieRow;
