import React from "react";
import style from "./../style/Navbar.module.scss";

function Navbar() {
  const NavbarItem = ["PRODUCT", "VIDEO", "CATATLOG", "EXPLORE MORE"];

  return (
    <div className={style.container}>
      <ul className={style.NavbarItem}>
        {NavbarItem?.map((v, i) => {
          return (
            <li
              key={i}
              className={style.LittleItem}
              style={{ borderBottom: i === 0 ? "1px solid #fff " : "" }}
            >
              {v}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Navbar;
