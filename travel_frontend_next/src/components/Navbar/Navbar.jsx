import Link from "next/link";

export default function Navbar() {
    return(
        <div className=" d-flex justify-content-between">
        <div className="navbar_design d-flex justify-content-between">
            <img src=""></img>
            <div>
            <Link href={"./page.jsx"}>Home</Link>
            <Link href={"./HolidayList.jsx"}>Destinations</Link>
            <Link href={"./Contact"}>Contact</Link> 
        </div>
        </div>
        </div>
    );
}