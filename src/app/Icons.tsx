"use client";
import { useState } from "react";
import Image from "next/image";
// import data from "./data.json";

export default function Icons() {
const [open, setOpen] = useState(false)

const handleOpen = () => {
  setOpen(!open);
}

return (
<aside className="flex justify-center" id="Icons">

<div>
<button onClick={handleOpen}>JavaScript
</button>
{open ? <span>TypeScript React</span> : null }

</div>

<h1>Tools and Skills</h1>
{/* 
{data.icons.map((icons) => (
<div key={icons.id} className="flex flex-col items-center font-extrabold"><Image

    src={icons.logo}
    alt={icons.title}
    className="hover:drop-shadow-lg hover:animate-bounce hover:scale-110 transition-all"
    width={65}
    height={90}
    priority />

    <span className="">{icons.title}</span>
    </div>
))} */}
</aside>
)
};
