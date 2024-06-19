

// use this component eventually in [holidayId]

export default function HolidayDetails(props) {
  console.log(props);
    return(
        <>
    <div className="Holiday-details">
      <div className="holiday-information">
        <p className="holiday-image">{props.image}</p>
        <p>{props.destination}</p>
        <p>{props.voyagers}x voyagers</p>
        <p>{props.duration} nights</p>
        <p>{props.startDate}</p>
        <p>{props.price}Euros pp</p>
        <p>{props.rating} Stars</p>
        <p>{props.hotelDetails}</p>
        <p>{props.locationDetails}</p>
        <p>{props.category}</p>
      </div>
    </div>
        </>
        
);
}