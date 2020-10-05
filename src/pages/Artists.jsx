import React from "react";
import Hero from "../components/Hero";
import { ArtistData } from "./Data/ArtistData";
import "./Artists.css";

function Artists() {
  return (
    <section className="artists-section">
      <div className="row artist-hero-wrapper">
        {ArtistData.map((data, key) => {
          return (
            <Hero key={key}
              title={data.name}
              img={data.img}
              alt={data.alt}
              bio={data.bio}
              website={data.website}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Artists;
