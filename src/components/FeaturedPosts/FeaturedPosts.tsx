import React from "react";
import PropTypes from "prop-types";
import { CardActionArea, CardMedia } from "@mui/material";

interface FeaturedPostProps {
  element: { src: string };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const post = {
    title: "asdasdads",
    date: "2017-12-12",
    description: "asdasfgdsgberg",
    image: "/wallet2.webp",
    imageTitle: "asdassadasdasd",
  };

  return (
    <CardActionArea className='featured-post' component='a' href='details'>
      <CardMedia
        className='cardMedia'
        image={props.element.src}
        title={post.imageTitle}
      />
    </CardActionArea>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
