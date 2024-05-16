import Link from "next/link";
import "./Navbar.css";
import { Image } from "react-bootstrap";

export default function Navbar() {


  return (
 
    <nav className="navbar navbar-expand-lg px-3">
    <div className="d-flex justify-content-between w-100">
        <Link className="navbar navbar-brand fs-2 fw-normal" href="/">
            <Image className="rounded-pill mx-2 d-inline-block align-text-top"
                  src="/images/holiday-logo.png"
                  alt="logo"
                  height= {80}
                  width= {80}
              ></Image>
          </Link>
      <div id="navbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/holiday">Destinations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
  </nav>
  )

}






