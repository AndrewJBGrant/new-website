import Image from "next/image";
import data from "./data.json";


export default function Icons() {

return (
<aside className="flex gap-6 font-extrabold">
{data.icons.map((icons) => (
<div key={icons.id} className="flex flex-col items-center hover:shadow-lg"><Image

    src={icons.logo}
    alt={icons.title}
    className="hover:drop-shadow-lg hover:animate-spin hover:scale-110 transition-all"
    width={60}
    height={80}
    priority />

    <span className="">{icons.title}</span>
    </div>
))}
</aside>
)

}
