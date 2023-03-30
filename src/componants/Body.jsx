import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import style from "../style/Body.module.scss";

function Body() {
  return (
    <div className={style.container}>
      <RightContainer />
      <LeftContainer />
    </div>
  );
}

export default Body;
