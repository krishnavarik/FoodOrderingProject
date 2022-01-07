import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>0</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A tabel full of deliciou food" />
      </div>
    </Fragment>
  );
};
export default Header;
