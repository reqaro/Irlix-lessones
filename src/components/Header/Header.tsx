import React from "react";
import { Icons } from "../UI/Icons";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__info">
            <div className="header__title">Главная</div>
            <div className="header__date">17 июля 2021</div>
          </div>
          <div className="header__logo">
            <Icons name={"logo"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
