import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const brand = "Logo";

  return (
    <div className="navbar">
      <Link href="/" className="logo">
        {brand}
      </Link>
      <nav>
        <ul className="navigation">
          <li>
            <Link href="/">Home</Link>
          </li>  
          <li>
            <Link href="/holiday">Destinations</Link>
           </li> 
           <li>
            <Link href="/Contact">Contact</Link> 
          </li>
        </ul>
      </nav>
    </div>
  );
}