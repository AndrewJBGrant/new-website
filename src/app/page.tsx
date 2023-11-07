import Image from 'next/image';
import data from './data.json';
import LinkCard from './LInkCard';

export default function Home() {

return(
<div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
<Image className="rounded-full"
alt={data.name}
src={data.avatar}
width={120}
height={120}
/>

<h1 className="font-bold mt-4 mb-8 text-xl">{data.name}</h1>

<section className="flex">
{data.links.map((link) => (
<LinkCard key={link.href}  {...link}/>
))}

{data.CV.map((cv) => (
<LinkCard key={cv.href} download={"Download Andrew Grant CV"} {...cv}/>
))}
</section>


</div>
)
}
