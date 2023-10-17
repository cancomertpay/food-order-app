import React from "react";

import classes from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="a table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;
