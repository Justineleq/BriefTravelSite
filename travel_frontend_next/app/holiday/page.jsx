"use client";

import "./page.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "@/src/components/Navbar/Navbar";
import HolidayCard from "@/src/components/Holidaycard/HolidayCard";
import Footer from "@/src/components/Footer/Footer";

import { useEffect, useState } from "react";


export default function Holidays() {
  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 
  const [data, setData] = useState(null); 

  useEffect(() => {
   
    try {
      fetch("http://127.0.0.1:8000/api/holidays" )
        .then((response) => response.json()) 
        .then((data) => {
          setLoading(false); 
          setData(data); 
        });
    } catch (error) {
      setError(true); 
      setLoading(false); 
    }
  }, []); 

  return (
    <main>
      <Navbar />
    
      {loading && !error && <div>Finding some places to spend all your money on !</div>}
      {!loading && !error && data && <HolidayCard props={data} />}
      {!loading && error && <div>There's been a slight problem...</div>}
      
     <Footer/>
    </main>

    


       
  );
}