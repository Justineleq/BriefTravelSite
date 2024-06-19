import { useState } from "react";
import "./ReservationForm.css";

export default function ReservationForm(props) {

  return (
    <div id="reservation-form" className="d-flex justify-content-center align-items-center vh-30 vw-30">
      <form onSubmit={props.formSubmit} className="d-flex flex-column align-items-center w-30 p-3 border" id="contact-form">
        <div className="form-group col-12 mb-7 d-flex flex-column align-items-center">
          <label htmlFor="inputName4" className="form-label text-center w-100">Name:</label>
          <input
            type="text"
            className="form-control w-100"
            id="inputName4"
            name="name"
            placeholder="Enter your first name here"
            // value={props.data.name}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <label htmlFor="inputSurname4" className="form-label text-center w-100">Surname:</label>
          <input
            type="text"
            className="form-control w-100"
            id="inputSurname4"
            name="surname"
            placeholder="Then your last name"
            // value={data.surname}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <label htmlFor="inputEmail4" className="form-label text-center w-100">Email:</label>
          <input
            type="email"
            className="form-control w-100"
            id="inputEmail4"
            name="email"
            placeholder="Correct email with a little @ please"
            // value={data.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <label htmlFor="floatingTextarea" className="form-label text-center w-100">Message:</label>
          <textarea
            className="form-control w-100"
            id="floatingTextarea"
            name="message"
            placeholder="Write your message here"
            // value={data.message}
            // onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}
