import React from "react";
import { Grid, Typography, Link, Paper } from "@mui/material";

export default function MainFeaturedPost(props: any) {
  const post = {
    title: "asdasdads",
    date: "2017-12-12",
    description: "asdasfgdsgberg",
    image: "/land.jpg",
    imageText: "asdassadasdasd",
    linkText: "asdasdasdasgds",
  };

  return (
    <Paper
      id='mainFeaturedPost'
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className='overlay' />
      {/* <Grid container>
        <Grid item md={6}>
          <div className='mainFeaturedPostContent'>
            <Typography
              component='h1'
              variant='h3'
              color='inherit'
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              {post.description}
            </Typography>
            <Link variant='subtitle1' href='#'>
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid> */}
    </Paper>
  );
}
