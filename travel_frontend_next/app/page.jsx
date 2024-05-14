"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Footer from "@/src/components/Footer/Footer";
import HeroBanner from '@/src/components/Herobanner/page';


export default function Home() {
  return (
    <>
    <main>
      <Navbar />
      <HeroBanner />
      <Footer />
    </main>
    </>
  );
}