"use client";

import "./page.css";
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";

export default function HolidayPage(props) {
console.log(props);
  return (
    <main>
      <Navbar />
      {/* <HolidayDetails />/ */ } 
      {/* I wanted to add all my components, but I don't have a clear enough understanding */}
      <div className="holiday">
        <div className="image-and-some-details">
            <img
              className="holiday-card-image"
              src={'http://localhost:8000/images/' + props.searchParams.image} 
              width={250}
              height={250}
              alt={"Image of " + props.searchParams.name}
                  />
                  <div className="details">
            <p><strong>{props.searchParams.Destination}</strong></p>
            <p>{props.searchParams.voyagers}x voyagers</p>
            <p>{props.searchParams.duration}x nights</p><br></br>
            <p>Price: {props.searchParams.price} Euros pp</p>
            <p>{props.searchParams.startDate}</p>
            </div>
            </div>
            <h4>Rating</h4>
            <p>{props.searchParams.rating} Stars</p>
            <h4>Hotel Details</h4>
            <p>{props.searchParams.hotelDetails}</p>
            <h4>Location Details</h4>
            <p>{props.searchParams.locationDetails}</p>
</div>

      <Footer/>
      
    </main>

  );
}
