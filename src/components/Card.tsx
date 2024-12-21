import React from "react";

type CardProps = {
  id: number,
  name: string,
  email: string
}

const Card: React.FC<CardProps> = ({ name, email, id}) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="photo-robot" />
      <>
        <h2>{name}</h2>
        <p>{email}</p>
      </>
    </div>
  );
}

export default Card;