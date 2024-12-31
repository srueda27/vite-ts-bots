import React, { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import Scroll from "../components/Scroll";
import "./App.css";

export type Robot = {
  id: number;
  name: string;
  email: string;
};

const App: React.FC = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchfield, setSearchfield] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []); // Empty dependency array ensures this runs only once

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchfield(event.target.value);
  };

  const filteredBots = robots.filter((bot) =>
    bot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className="tc">
      <h1 className="f1">Bots</h1>
      <Searchbox searchChange={onSearchChange} />
      <Scroll>
        {robots.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <CardList robots={filteredBots} />
        )}
      </Scroll>
    </div>
  );
};

export default App;
