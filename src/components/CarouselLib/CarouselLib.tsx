import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface CarouselLibProps {
  images: string[];
}

function CarouselLib(props: CarouselLibProps) {
  return (
    <Carousel>
      {props.images.map((img) => {
        return (
          <div>
            <img src={img} />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselLib;
