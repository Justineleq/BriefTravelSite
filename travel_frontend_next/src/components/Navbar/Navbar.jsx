import Link from "next/link";
import "./Navbar.css";
import { Image } from "react-bootstrap";

export default function Navbar() {


  return (
 
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
        <Link className="d-flex me-auto p-2" href="/">
            <Image className="rounded-pill mx-2 d-inline-block align-text-top"
                  src="/images/holiday-logo.png"
                  alt="logo"
                  height= {100}
                  width= {100}
                  margin-right='auto'
              ></Image>
          </Link>
      <ul className="navbar-nav me-2 d-flex align-items-end">
          <li className="nav-item">
            <Link className="nav-link fs-4" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" href="/holiday">Destinations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-4" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

  </nav>
  )

}






