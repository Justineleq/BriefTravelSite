"use client"

import { Image } from "react-bootstrap";

export default function HeroBanner(){
    return (
        <div >
        <Image className="hero-banner"
            src='/images/herobanner.jpg'
            width="100%"
            height="10%"
            alt="Beautiful skies">
        </Image>
        <div className="text-hero-banner">
            <h2>Want to escape from Simplon...</h2>
            </div>
        


        </div>

    );
}