import React from "react";
import { Cocktail } from "types";
import "./Home.scss";
import { CocktailCard } from "@components/CocktailCard";

const Home = () => {
  const cocktailItems = [
    {
      id: 1,
      img: "https://raw.githubusercontent.com/reqaro/Irlix-lessones/images/blackberry_cocktail%20.jpg",
      alcoholByVolume: "30",
      name: "Blackberry",
      description: "Освежающий напиток",
    },
    {
      id: 2,
      img: "https://raw.githubusercontent.com/reqaro/Irlix-lessones/images/mojite_cocktail.jpg",
      alcoholByVolume: "40",
      name: "Мохито",
      description: "Освежающий напиток",
    },
    {
      id: 3,
      img: "https://raw.githubusercontent.com/reqaro/Irlix-lessones/images/mojite_cocktail.jpg",
      alcoholByVolume: "40",
      name: "Мохито",
      description: "Освежающий напиток",
    },
    {
      id: 4,
      img: "https://raw.githubusercontent.com/reqaro/Irlix-lessones/images/blackberry_cocktail%20.jpg",
      alcoholByVolume: "30",
      name: "Blackberry",
      description: "Освежающий напиток",
    },
  ];

  return (
    <main className="home">
      <div className="container">
        <div className={"home-list"}>
          {cocktailItems.map((cocktail: Cocktail) => (
            <div className={"home-list__element"} key={cocktail.id}>
              <CocktailCard
                img={cocktail.img}
                alcoholByVolume={cocktail.alcoholByVolume}
                name={cocktail.name}
                description={cocktail.description}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export { Home };
