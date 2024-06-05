import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
} from "@mui/material";

export default function FeaturedPost(props: any) {
  const post = {
    title: "asdasdads",
    date: "2017-12-12",
    description: "asdasfgdsgberg",
    image: "/wallet2.webp",
    imageTitle: "asdassadasdasd",
  };

  return (
    <CardActionArea className='featured-post' component='a' href='#'>
      <CardMedia
        className='cardMedia'
        image={post.image}
        title={post.imageTitle}
      />
    </CardActionArea>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
