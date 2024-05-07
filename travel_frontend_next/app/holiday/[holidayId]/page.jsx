"use client";


import "./page.css";
import { useEffect, useState } from "react";
import HolidayDetails from "@/src/components/HolidayDetails/HolidayDetails";
import Footer from "@/src/components/Footer/Footer";


export default function HolidayPage() {
  // Initialisation des états pour gérer le chargement, les erreurs, et les données reçues.
  const [loading, setLoading] = useState(true); // État de chargement des données.
  const [error, setError] = useState(false); // État pour capturer une éventuelle erreur lors du fetch.
  const [data, setData] = useState(null); // Stockage des données reçues du fetch.

  useEffect(() => {
    // Déclenchement de la récupération des données de personnages au montage du composant.
    try {
      fetch("https://localhost3000.com/api/holiday" + props.params.holidayId)
        .then((response) => response.json()) // Transformation de la réponse en JSON.
        .then((data) => {
          setLoading(false); // Arrêt de l'indicateur de chargement après la réception des données.
          setData(data.results); // Enregistrement des données reçues dans l'état 'data'.
        });
    } catch (error) {
      setError(true); // Enregistrement de l'erreur dans l'état 'error'.
      setLoading(false); // Arrêt de l'indicateur de chargement en cas d'erreur.
    }
  }, []); // Le tableau vide indique que cet effet ne s'exécute qu'au montage.

  return (
    <main>
      <Navbar />
      {/* Affichage conditionnel en fonction de l'état du chargement et des erreurs */}
      {loading && !error && <div>Oh man, you broke it! Just kidding....!</div>}
      {!loading && !error && data && (<HolidayDetails
          destination={data.destination}
          voyagers={data.voyagers}
          duration={data.duration}
          startDate={data.startDate}
          price={data.price}
          rating={data.rating}
          hotelDetails={data.hotelDetails}
          locationDetails={data.locationDetails}
          image={data.image}
        />
      )}
      {!loading && error && <div>Oh yeah you really broke it this time...</div>}
      <Footer/>
    </main>

  );
}
