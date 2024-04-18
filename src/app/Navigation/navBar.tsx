"use client";

import { useState } from "react";

export default function NavBar() {
const [open, setIsOpen] = useState(false)

  return (

    <>
{!open ?
(
<button className="z-40 fixed top-1/2 right-0" onClick={() => setIsOpen(!open)}>open</button>
) : (
<button className="z-10 fixed top-1/2 right-0" onClick={() => setIsOpen(!open)}>close</button>
)
}
    <nav className={`text-white h-full fixed top-0 right-0 p-2 bg-green-900
${open ? 'translate-x-0' : 'translate-x-full'}
    ease-in-out duration-300`}>
      <ul>
        <li>About Me</li>
        <li>Skills</li>
        <li>Tools</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
</nav>
</>
  );
}
