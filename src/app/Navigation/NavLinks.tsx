"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }: any) {
  let segment = useSelectedLayoutSegment();
  let active = href === `${segment}`;
  console.log({segment}, "segment")
   console.log({href}, "href");
   console.log({ active }, "active");

  return (
    <Link className={active ? "text-orange-500" : ""} href={href}>
      {children}
    </Link>
  );
}

// "use client";

// import Link from "next/link";
// import { useSelectedLayoutSegments } from "next/navigation";

// export default function NavLink({
//   href,
//   children,
//   }: {
//   href: string
//   children: React.ReactNode
// }) {


//   let segment = useSelectedLayoutSegments();
//   let active = href === segment;
//   // console.log("1",{segment})
//   // console.log("2",{href, segment});
//   // console.log("3",{ href, active });

//   return (

//     <Link href={href}>
//       {children}
//        <ul>
//       {segment.map((segment, index) => (
//         <li key={index}>{segment}</li>
//       ))}
//     </ul>
//     </Link>
//   );
// }
