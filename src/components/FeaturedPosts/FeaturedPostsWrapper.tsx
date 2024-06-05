import React from "react";
import FeaturedPost from "./FeaturedPosts";
import { Button, Typography } from "@mui/material";

function FeaturedPostsWrapper() {
  const arr = [1, 2, 3, 4, 4, 5];

  return (
    <div className='featured_posts_wrapper'>
      <Typography className='title' component='h2' variant='h4'>
        Актулни продукти
      </Typography>

      <Button id='all_products_button' variant='contained'>
        Виж всички тук
      </Button>
      <div className='featured_wrapper'>
        {arr.map((el) => (
          <FeaturedPost />
        ))}
      </div>
    </div>
  );
}

export default FeaturedPostsWrapper;
