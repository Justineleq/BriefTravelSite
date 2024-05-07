import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  const brand = "Logo";

  return (
    <div className="footer">
      <Link href="/" className="logo">
        {brand}
      </Link>
    </div>
  );
}