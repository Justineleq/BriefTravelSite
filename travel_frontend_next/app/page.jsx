"use client";

import "./page.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import MiniCard from '@/src/components/MiniCard/MiniCard';
import HeroBanner from '@/src/components/Herobanner/HeroBanner';
import MiniCardNature from "@/src/components/MiniCardNature/MiniCardNature";

import { useEffect, useState } from 'react';



export default function Home(props) {

// console.log(props);

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
    <>
    <main>
      <Navbar />
      <HeroBanner />
      <p className="fs-4 fw-normal m-2">Yeyyy let's go there...</p>

      {loading && !error && <div>Finding some places to spend all your money on !</div>}
      {!loading && !error && data && <MiniCard props={data} />}
      {!loading && error && <div>There's been a slight problem...</div>}

      <p className="fs-4 fw-normal m-2">Love a bit of natural stuff...</p>

      {loading && !error && <div>Finding some places to spend all your money on !</div>}
      {!loading && !error && data && 
      <MiniCardNature props= {data}/>}
      {!loading && error && <div>There's been a slight problem...</div>}

      <Footer />
    </main>
    </>
  );
}