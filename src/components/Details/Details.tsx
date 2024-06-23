import React from "react";
import ImageSlider from "../ImageSlider";

function Details() {
  const slides = [
    { url: "wallet2.webp", title: "beach" },
    { url: "wallet2.webp", title: "boat" },
    { url: "wallet2.webp", title: "forest" },
    { url: "wallet2.webp", title: "city" },
    { url: "wallet2.webp", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div id='details_wrapper'>
      <div className='product_images'>
        {/* <img src='wallet.webp' alt='' /> */}
        <ImageSlider slides={slides} parentWidth={600} />
      </div>
      <div className='product_details_wrapper'>
        <span className='product_model'>Nqkvo Ime Tuk Tam</span>
        <span className='product_price'>214lv</span>
        <div className='product_details'>
          <p className='product_info'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            itaque doloremque pariatur, placeat dicta ullam deleniti rerum. Quia
            voluptates, nesciunt laborum nihil necessitatibus rerum? Fuga eius
            molestiae earum totam impedit.
          </p>
          <p className='product_features'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            nostrum architecto incidunt, inventore asperiores ullam! Aperiam,
            iure odit! Corrupti enim dolorem eius nemo consequuntur minima
            expedita nam minus cumque porro!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
