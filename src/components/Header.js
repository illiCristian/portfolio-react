import React from "react";
import Logo from "../assets/logo.svg";
import { DiCssdeck } from "react-icons/di";

const Header = () => {
  return (
    <header className="py-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            <DiCssdeck size="2rem" /> <span>Portfolio</span>
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
