import HolidayCard from "../Holidaycard/HolidayCard";

export default function HolidayList(props) {
    console.log(props.holidays);
    return(
        <div className="holiday-list">
            {props.holidays.map((holiday, index) => (
                <div key={'/holidays/' + holiday.id}>
                    <li>
                    <p>{holiday.destination}</p>
                    <p>{holiday.voyagers}x voyagers</p>
                    <p>{holiday.duration} nights</p>
                    <p>{holiday.startDate}</p>
                    <p>{holiday.price}Euros pp</p>
                    <p>{holiday.rating} Stars</p>
                    <p>{holiday.hotelDetails}</p>
                    <p>{holiday.locationDetails}</p>
                    </li>
                    
                </div>

            ))}

        </div>
    )
}