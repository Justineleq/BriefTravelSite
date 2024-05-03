import Link from "next/link";

export default function HolidayList(props) {
    return(
        <>
        {props.holidays && (
            <ul className="holiday-list">
                {props.holidays.map((hldays, index) => (
                    <Link key={index} href={"/holiday/" + holiday.id}>
                        <li>
                            <HolidayHomePage
                        </li>
                    </Link>
                ))}
            </ul>
        )}
        </>
);
}