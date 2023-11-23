import Image from "next/image";
import data from "./data.json";


export default function Icons() {

return (
<aside className="flex justify-center">


<div>
<h1>Tools and Skills</h1>
<span></span>
</div>

{data.icons.map((icons) => (
<div key={icons.id} className="flex flex-col items-center hover:shadow-lg font-extrabold"><Image

    src={icons.logo}
    alt={icons.title}
    className="hover:drop-shadow-lg hover:animate-bounce hover:scale-110 transition-all"
    width={65}
    height={90}
    priority />

    <span className="">{icons.title}</span>
    </div>
))}
</aside>
)

}
