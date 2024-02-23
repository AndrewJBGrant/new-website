"use client";
import { useState } from "react";
import NavBar from "./navBar";



export default function HideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavBar() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="flex flex-row">
      {isOpen && <NavBar />}

      <button className="top-1/2 translate-y-1/2 rounded bg-green-700" onClick={toggleNavBar}>{isOpen ? <span>Close</span> : <span>Open</span>}</button>

    </div>
  );
}
