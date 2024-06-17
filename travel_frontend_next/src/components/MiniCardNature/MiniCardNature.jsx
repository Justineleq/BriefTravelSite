import Link from "next/link";
import "./MiniCardNature.css";



export default function MiniCardNature(props) {

  const natureHolidays = props.props.filter(holiday => holiday.category === 'Nature');


  console.log(props, 'minicardnature comp');
  return(
    <div className="holiday-card-mini-nature">
        {props.props.length > 0  && props.props.map((holiday) => (
          <Link className="mini-link-nature"
          href={{
              pathname: `/holiday/${holiday.Destination}`,
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
                         {props.category && props.category.map((category, index) => (
                                <p key={index}>{category.name}</p>
        ))}
            </Link>

        ))}

    </div>
)}
