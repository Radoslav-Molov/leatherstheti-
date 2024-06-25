import React from "react";
import FeaturedPost from "./FeaturedPosts";
import { Button, Typography } from "@mui/material";

function FeaturedPostsWrapper() {
  const arr = [
    { src: "/1.jpg" },
    { src: "/2.jpg" },
    { src: "/3.jpg" },
    { src: "/4.jpg" },
    { src: "/5.jpg" },
    { src: "/6.jpg" },
  ];

  return (
    <div className='featured_posts_wrapper'>
      <Typography className='title' component='h2' variant='h4'>
        Категории
      </Typography>
      <Typography className='category_text' component='p'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
        doloremque magni nulla consectetur nesciunt corrupti id sint eos nihil
        inventore quis, minima, officia dolores! Omnis molestiae dicta unde enim
        voluptatem? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Harum doloremque magni nulla consectetur nesciunt corrupti id sint eos
        nihil inventore quis, minima, officia dolores! Omnis molestiae dicta
        unde enim voluptatem?
      </Typography>

      <Button id='all_products_button' variant='contained'>
        Виж всички тук
      </Button>
      <div className='featured_wrapper'>
        {arr.map((el) => (
          <FeaturedPost element={el} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedPostsWrapper;
