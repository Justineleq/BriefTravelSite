import Link from "next/link";
import "./HolidayCard.css";

export default function HolidayCard(props) {
  // console.log(props);
  return(
    <div className="holiday-card" >
        {props.props.length > 0  && props.props.map((holiday) => (
          <Link className="link-holiday-card" key={holiday.id}
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
                image: holiday.image,
                category: holiday.category
              }
          }}

       >
                <p>{holiday.Destination}</p>
                <img
                  className="holiday-card-image"
                  src={'http://localhost:8000/images/' + holiday.image} 
                  width={250}
                  height={280}
                  alt={"Image of " + holiday.image.name}
                 
                />
            
            </Link>

        ))}

    </div>
)}
