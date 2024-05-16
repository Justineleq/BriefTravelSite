"use client"

import { Image } from "react-bootstrap";

export default function HeroBanner(){
    return (
        <div className="position-relative" >
        <Image className="hero-banner"
            src='/images/herobanner.jpg'
            width="100%"
            height="10%"
            alt="Beautiful skies">
        </Image>
            <h2 className="text-hero-banner position-absolute top-50">Want to escape from Simplon...</h2>
        </div>

    );
}