import React from "react";
import Card from "./Card";
import { Robot } from "../containers/App";

type CardListProps = {
  robots: Robot[];
};

const CardList: React.FC<CardListProps> = ({ robots }) => {
  return (
    <>
      {robots.map((user) => (
        <Card
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      ))}
    </>
  );
};

export default CardList;
