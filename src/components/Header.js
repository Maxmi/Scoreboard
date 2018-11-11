import React from "react";
import Stats from "./Stats";

const Header = props => {
  // console.log("these are the Header props ", props);
  return (
    <header>
      <Stats players={props.players} />
      <h1>{props.title}</h1>
    </header>
  );
};

export default Header;
