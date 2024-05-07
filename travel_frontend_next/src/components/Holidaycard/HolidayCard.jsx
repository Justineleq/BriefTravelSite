import Link from "next/link";
import "./HolidayCard.css";

export default function HolidayCard(props) {
  console.log("here",props);
  return(
    <div className="holiday-card">
        {props.props.length > 0  && props.props.map((holiday, index) => (
            <Link href={'/holidays/{destination}' + holiday.Destination}>
                <p>{holiday.Destination}</p>
                <img
                  className="holiday-card-image"
                  src={'http://localhost:8000/images/' + holiday.image} 
                  width={250}
                  height={250}
                  alt={"Image of " + holiday.name}
                 
                />
            
            </Link>

        ))}

    </div>
)}
