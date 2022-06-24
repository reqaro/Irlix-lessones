import React from "react";
import "./CocktailCard.scss";

type Props = {
  img: string;
  alcoholByVolume: string;
  name: string;
  description: string;
};

const CocktailCard = ({ img, alcoholByVolume, name, description }: Props) => {
  return (
    <article className={"cocktail-card"}>
      <img className={"cocktail-card__img"} src={img} />
    </article>
  );
};

export { CocktailCard };
