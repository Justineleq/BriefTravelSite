
import HolidayImage from "../HolidayImage/HolidayImage";

export default function HolidayDetails(props) {
    return(
        <>
    <div className="Holiday-details">
      {props.image && (
        <HolidayImage/>
      )}
      <div className="holiday-information">
        <p>{props.destination}</p>
        <p>{props.voyagers}x voyagers</p>
        <p>{props.duration} nights</p>
        <p>{props.startDate}</p>
        <p>{props.price}Euros pp</p>
        <p>{props.rating} Stars</p>
        <p>{props.hotelDetails}</p>
        <p>{props.locationDetails}</p>
      </div>
    </div>
        </>
);
}