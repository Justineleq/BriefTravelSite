import Link from "next/link";
import "./HolidayCard.css";

export default function HolidayCard(props) {
  console.log("here",props);
  return(
    <div className="holiday-card">
        {props.props.length > 0  && props.props.map((holiday, index) => (
          <Link className="link"
          href={{
              pathname: `/holiday/${holiday.Destination}`,
              query: {
                Destination: holiday.Destination,
                voyagers:  holiday.voyagers,
                duration:  holiday.duration,
                startDate:  holiday.startDate,
                price:  holiday.price,
                rating:  holiday.rating,
                hotelDetails:  holiday.hotelDetails,
                locationDetails: holiday.locationDetails,
                image: holiday.image
              }
          }}

       >
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
