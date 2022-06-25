import React from "react";
import "./Card.scss";

type Props = {
  img: string;
  alcoholByVolume?: string;
  name: string;
  description: string;
};

const Card = ({ img, alcoholByVolume, name, description }: Props) => {
  return (
    <article className={"card"}>
      <img className={"card__img"} src={img} alt={name} />
      <div className={"card__info"}>
        {alcoholByVolume && (
          <div className={"degree"}>
            <div className={"degree__value"}>{alcoholByVolume}%</div>
            <div className={"degree__title"}>алкоголь</div>
          </div>
        )}
        <div className={"card__text"}>
          <h2 className={"card__name"}>{name}</h2>
          <h3 className={"card__description"}>{description}</h3>
        </div>
      </div>
    </article>
  );
};

export { Card };
