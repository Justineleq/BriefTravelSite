
import "./ReservationForm.css"

export default function ReservationForm(props) {
    console.log(props, 'reservation comp');
  return (
    <div id="reservation-form" className=" d-flex justify-content-center align-items-center vh-30 vw-30">
      <form onSubmit={props.formSubmit} className="d-flex flex-column align-items-center w-30 p-3 border" id="contact-form">
        <div className="form-group col-12 mb-7 d-flex flex-column align-items-center">
          <label for="inputName4" className="form-label text-center w-100">Name:</label>
          <input type="text" className="form-control w-100" id="inputName4" placeholder="Enter your first name here"/>
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <label for="inputSurname4" className="form-label text-center w-100">Surname:</label>
          <input type="text" className="form-control w-100" id="inputSurname4" placeholder="Then your last name"/>
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <label for="inputEmail4" className="form-label text-center w-100">Email:</label>
          <input type="email" className="form-control w-100" id="inputEmail4" placeholder="Correct email with a little @ please"/>
        </div>

        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <label for="floatingTextarea" className="form-label text-center w-100">Message:</label>
          <textarea className="form-control w-100" placeholder="Write your message here" id="floatingTextarea"></textarea>
        </div>
        <div className="form-group col-12 mb-3 d-flex flex-column align-items-center">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}
