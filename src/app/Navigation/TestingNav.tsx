import NavLink from "./NavLinks";
import Link from "next/link"
export default function TestingNavBar() {

return (
<>
<nav className="bg-teal-500 text-3xl sticky">
<NavLink href="#About">
About
      </NavLink>
<NavLink href="#Icons">
Icons
      </NavLink>
<NavLink href="#Projects">
Projects
      </NavLink>
</nav>
</>
);
}


{/* <NavLink href="/">
        <NavBarIcon title={"Home"} />
      </NavLink> */}
