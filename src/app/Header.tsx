// import Image from "next/image";
// // import data from "./data.json";
// import Link from "./Link";






// export default function HeaderSection() {
//   // let intervalId: any

//   // function changeColor() {

//   // if (!intervalId) {

//   // intervalId = setInterval(flashText, 1000)
//   // }
//   // }

//   // function flashText() {

//   // }

//   return (
//     <header id="Home" className="min-h-screen bg-orange-600">

//       <Image id="avatar"
//         className="border-solid border-2 border-accent dark:border-accent rounded-full"
//         // alt={data.name}
//         // src={data.avatar}
//         width={200}
//         height={200}
//       />

//       <h2 className="mb-4 mt-6 text-xl font-light leading-relaxed text-textsecondary dark:text-textsecondary">
//         {data.heading}
//       </h2>
//       <h1 className="font-extrabold text-4xl" id="name">{data.name}</h1>


//        <h2 className="mb-4 mt-6 text-xl font-light leading-relaxed">{data.intro}</h2>



//       {/*
//    <div className="flex">
//       <span className="animated-text">Well</span>
//       <span className="animated-text animate-delay-2">Then</span>
//       <span className="animated-text animate-delay-4">Lets See</span>
//     </div> */}
//       {/* <h3 className="animation-delay-[4000ms] font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
// There.
// </h3>
// <h3 className="font-bold bg-gradient-to-r from-white via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient animation-delay-[6000ms]">
// Goodbye
// </h3> */}







//       {/* // Links */}
//       <section
//         className="flex justify-center mx-auto
//       text-3xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
//       >
//         {data.links.map((link, index) => (
//           <Link key={index} {...link} />
//         ))}

//         {data.CV.map((cv, index) => (
//           <Link key={index} download={"Download Andrew Grant CV"} {...cv} />
//         ))}
//       </section>
//     </header>
//   );
// }
