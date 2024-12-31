import React, { ChangeEvent } from "react";

type SearchboxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Searchbox: React.FC<SearchboxProps> = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="br3 pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search for bots"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
