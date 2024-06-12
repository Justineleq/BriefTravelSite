import Link from "next/link";
import "./MiniCard.css";

export default function MiniCard(props) {
  // console.log(props);
  return(
    <div className="holiday-card-mini">
 {props.props.length > 0  && props.props.map((holiday) => (
          <Link className="mini-link"
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
                <img
                  className="holiday-card-mini-image"
                  src={'http://localhost:8000/images/' + holiday.image} 
                  width={160}
                  height={180}
                  gap={10}
                  alt={"Image of " + holiday.image.name}
                 
                />         
            </Link>

        ))}

    </div>
)}
