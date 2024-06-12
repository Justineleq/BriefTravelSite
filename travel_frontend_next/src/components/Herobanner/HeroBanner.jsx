"use client"

import "./HeroBanner.css";

export default function HeroBanner(){
    return (
        <div className=" position-relative">
              <h2 className="text-hero-banner">Want to fuck off somewhere fabulous...</h2>
                <img className="hero-banner"
                    src='/images/herobanner.jpg'
                    width="100%"
                    height="100%"
                    alt="Beautiful skies">
                </img>
        </div>

    );
}