
import "./Footer.css";
import { Image } from "react-bootstrap";

export default function Footer() {

  return (
    <div className="footer">
            <Image className="rounded-pill mx-2 d-inline-block align-text-top"
                  src="/images/holiday-logo.png"
                  alt="logo"
                  height= {50}
                  width= {50}
              ></Image>
    </div>
  );
}