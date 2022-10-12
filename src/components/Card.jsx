import React from "react";

const Card = ({ item }) => {
  const { src, heading, text } = item;
  return (
    <article className=" md:flex md:even:flex-row-reverse md:justify-between md:items-center text-VeryDarkCyan rounded-2xl py-12 px-8 text-center shadow-card bg-white ">
      <div className="md:flex-1">
        <img src={src} className="md:max-w-[80%]" alt="" />
      </div>
      <div className="md:flex-1 md:max-w-[80%] md:text-start">
        <h1 className="mt-16 text-2xl font font-semibold font-body">
          {heading}{" "}
        </h1>
        <p className="mt-6 text-xl text-GrayishBlue leading-8">{text}</p>
      </div>
    </article>
  );
};

export default Card;
