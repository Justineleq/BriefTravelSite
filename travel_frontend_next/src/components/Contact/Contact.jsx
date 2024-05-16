export default function ContactForm(props) {
   
    return(
      <div className="contact-form position-absolute">
        <form onSubmit={props.formSubmit} class="flex-column mb-3 d-flex align-items-center w-auto p-3">
          <h1>Here to help</h1>
              <div class="col-md-6">
                <label for="inputName4" class="form-label">Name:</label>
                <input type="name" class="form-control" id="inputName4"></input>
              </div>
              <div class="col-md-6">
                <label for="inputSurname4" class="form-label">Surname:</label>
                <input type="surname" class="form-control" id="inputSurname4"></input>
              </div>
              <div class="col-7">
              <label for="inputEmail4" class="form-label">Email:</label>
                <input type="email" class="form-control" id="inputEmail4"></input>
              </div>
              <div class="col-7">
                <label for="inputSubject2" class="form-label">Subject:</label>
                <input type="text" class="form-control" id="inputSubject2" placeholder="Subject"></input>
              </div>
              <br></br>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Write your messag here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Message:</label>
              </div>
              <br></br>
              <div class="col-5">
                <button type="submit" class="btn btn-primary m-b 20">Send</button>
              </div>
          </form>
        </div>
    )
}

