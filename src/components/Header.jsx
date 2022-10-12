import React from "react";

const Header = () => {
  return (
    <header className="px-4 md:p-8 lg:px-16 pt-8">
      <nav className="flex justify-between items-center">
        <img width="150" src="/images/logo.svg" alt="" />
        <button className="bg-white hover:text-GrayishBlue transition text-VeryDarkCyan py-2 px-6 rounded-full shadow-lg font-heading text-[15px] font-semibold ">
          Try It Free
        </button>
      </nav>
    </header>
  );
};

export default Header;
