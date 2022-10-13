import React from "react";

const Hero = () => {
  return (
    <section className="px-8 md:px-8 lg:px-16 md:flex md:justify-between md:items-center text-center text-VeryDarkCyan font-body mt-28 md:mt-12 md:gap-8  ">
      <div className=" md:text-start flex-1 ">
        <div className="space-y-8 ">
          <h1 className="text-3xl font-semibold lg:max-w-[80%] md:max-w-[90%]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-xl ">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="py-4 hover:bg-opacity-70 shadow-xl transition bg-Pink px-20 rounded-full text-white font-semibold">
            Get Started For Free
          </button>
        </div>
      </div>
      <figure className="flex-1 pt-16 md:pt-0  pb-8">
        <img src="/images/illustration-mockups.svg" alt="" />
      </figure>
    </section>
  );
};

export default Hero;
