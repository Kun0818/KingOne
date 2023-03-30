import { useState } from "react";
import Body from "./componants/Body";
import Navbar from "./componants/Navbar";
import "./Reset.css";
import style from "./style/App.module.scss";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
