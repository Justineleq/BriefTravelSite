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
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 


function handleFormsubmit(event) {
  console.log(event, 'click contact');

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
            name: name,
            surname: surname,
            email: email,
            subject: subject,
            message: message,
        }),
        }
        )
          .then((response) => response.json()) // Transformation de la réponse en JSON.
          .then((data) => {
            setLoading(false); // Arrêt de l'indicateur de chargement après la réception des données.
            setData(); // Enregistrement des données reçues dans l'état 'data'.
          });
      } catch (error) {
        setError(true); // Enregistrement de l'erreur dans l'état 'error'.
        setLoading(false); // Arrêt de l'indicateur de chargement en cas d'erreur.
      }

}

  return (
    <main>
        <Navbar />
        <ContactForm formSubmit={handleFormsubmit} />
        <Footer/>
    </main>

  )
}