"use client";

import "./page.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import ReservationForm from "@/src/components/ReservationForm/ReservationForm";


export default function HolidayPage(props) {
console.log(props);

let startDate = new Date(props.searchParams.startDate);

const dateFormat =  
{
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

startDate = startDate.toLocaleDateString('en-GB', dateFormat)

  return (
    <main>
      <Navbar />
      {/* <HolidayDetails />/ */ } 
      {/* I wanted to add all my components, but I don't have a clear enough understanding why this one doesn't work */}
      <div className="holiday">
        <div className="image-and-some-details">
            <img
              className="holiday-card-image"
              src={'http://localhost:8000/images/' + props.searchParams.image} 
              width={180}
              height={200}
              alt={"Image of " + props.searchParams.name}
                  />
                  <div className="details">
            <p><strong>{props.searchParams.Destination}</strong></p>
            <p>{props.searchParams.voyagers}x Voyagers</p>
            <p>{props.searchParams.duration}x Nights</p><br></br>
            <p><strong>Price: </strong>{props.searchParams.price} Euros pp</p>

            <p><strong>Start Date: </strong>{startDate}</p>
            </div>
            </div>
            <h4>Rating</h4>
            <p>{props.searchParams.rating} Stars</p>
            <h4>Hotel Details</h4>
            <p>{props.searchParams.hotelDetails}</p>
            <h4>Location Details</h4>
            <p>{props.searchParams.locationDetails}</p>
      </div>

      <ReservationForm props={props} />
      <Footer/>
      
    </main>

  );
}
