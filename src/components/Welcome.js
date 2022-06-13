// write code for Welcome component here
import React from "react";

const Welcome = (temp) => {
  return (
    <>
      <h1>Hey{temp.name}!</h1>
      <h2>Welcome to Newton School</h2>
    </>
  );
};

export default Welcome;
