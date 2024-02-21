import React from "react";

export const Wishlist = ({ title, children }) => {
  return (
    <div className="text-left">
      <h1 className="text-3xl underline">{title}</h1>
      {children}
    </div>
  );
};
export const WishItem = () => {
  return (
    <div className="bg-white my-3 rounded-lg p-4">
      <h2 className="text-2xl">Potato salad</h2>
      <p>Time: 2min</p>
      <p>Tags: #breakfast #lunch #dinner</p>
    </div>
  );
};
