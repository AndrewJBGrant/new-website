"use client";
import { useState } from "react";

export default function TestNav() {
  const [isOpen, setIsOpen] = useState(false);


  function toggleNavBar() {
    setIsOpen((isOpen) => !isOpen);
  }

return(
<>
 {isOpen ? (
    <button
      className="flex text-4xl text-white items-center fixed left-10 top-6 z-50"
      onClick={toggleNavBar}
    >
      x
    </button>
  ) : ( <svg
      onClick={toggleNavBar}
      className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
      fill="#2563EB"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  )}

<div className={`bg-blue-400 h-full left-0 top-0 fixed ease-in-out duration-300 ${ isOpen ? "translate-x-0" : "translate-x-full" }`}>
<h2 className="mt-20 text-2xl">
Hello We have a navbar here!!!
</h2>
</div>

 {/* <button className=" bg-green-700" onClick={toggleNavBar}>{isOpen ? <span>Close</span> : <span>Open</span>}</button> */}
</>


);
}
