
// looks great on phone but not on laptop. When in Destinations looks rubbish
import "./Footer.css";
import { Image } from "react-bootstrap";

export default function Footer() {

  return (
    <nav id="footer" className="navbar navbar-expand-lg d-flex align-items-end">
            <Image className="rounded-pill mx-2 d-inline-block align-text-top"
                  src="/images/holiday-logo.png"
                  alt="logo"
                  height= {50}
                  width= {50}
              ></Image>
    </nav>
  );
}