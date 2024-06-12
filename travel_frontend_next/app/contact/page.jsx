"use client";

import ContactForm from "@/src/components/Contact/Contact";
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function ContactPage() {
  // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    subject: '',
    message: ''
  }

  ); // Stockage des données reçues du fetch.

function handleFormsubmit(event) {
    event.preventDefault();
    const name = (event.target[0].value);
    const surname = (event.target[1].value);
    const email = (event.target[2].value);
    const subject = (event.target[3].value);
    const message = (event.target[4].value);

    try {
        fetch("http://127.0.0.1:8000/api/contact/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: name,
            Surname: surname,
            Email: email,
            Subject: subject,
            Message: message,
        }),
        }
        )
          .then((response) => response.json()) // Transformation de la réponse en JSON.
          .then((data) => {
  
          });
      } catch (error) {

      }

}

  return (
    <main>
        <Navbar />
        <ContactForm formSubmit={handleFormsubmit} />
        <Footer />
    </main>

  )
}
