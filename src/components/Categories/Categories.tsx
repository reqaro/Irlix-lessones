import React, { useState } from "react";
import "./Categories.scss";

const categoriesItems = [
  {
    id: 1,
    name: "новинки",
  },
  {
    id: 2,
    name: "сладкие",
  },
  {
    id: 3,
    name: "хит",
  },
  {
    id: 4,
    name: "крепкие",
  },
];

const Categories = () => {
  const [activeItem, setActiveItem] = useState<number>(2);
  const onSelectItem = (id: number): void => {
    setActiveItem(id);
  };
  return (
    <div className="categories categories--margin">
      <ul className={"categories__items"}>
        {categoriesItems.map((category) => (
          <li
            className={
              activeItem === category.id
                ? "categories__item active"
                : "categories__item"
            }
            onClick={() => onSelectItem(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Categories };
