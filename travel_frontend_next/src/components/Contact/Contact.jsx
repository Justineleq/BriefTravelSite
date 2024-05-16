export default function ContactForm() {
        
    return(
        <>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="inputName4" class="form-label">Name:</label>
    <input type="name" class="form-control" id="inputName4"></input>
  </div>
  <div class="col-md-6">
    <label for="inputSurname4" class="form-label">Surname:</label>
    <input type="surname" class="form-control" id="inputSurname4"></input>
  </div>
  <div class="col-12">
  <label for="inputEmail4" class="form-label">Email:</label>
    <input type="email" class="form-control" id="inputEmail4"></input>
  </div>
 
  <div class="col-12">
    <label for="inputSubject2" class="form-label">Subject:</label>
    <input type="text" class="form-control" id="inputSubject2" placeholder="Subject"></input>
  </div>
  <div class="input-group">
  <span class="input-group-text">Message:</span>
  <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Send</button>
  </div>
</form>
</>
    )
}

