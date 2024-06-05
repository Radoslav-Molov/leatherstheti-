import { Button, Typography } from "@mui/material";
import React from "react";

function Info() {
  return (
    <div id='info_wrapper'>
      <img className='info_img' src='page.jpg' alt='info' />
      <div>
        <Typography component='h3' variant='h4'>
          Докосни се до красотата на растително дъбената кожа
        </Typography>
        <Typography component='h2' variant='h5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          doloribus hic quod autem fugiat amet similique, nemo, suscipit odio
          dolores id nesciunt harum officia illo consequuntur cum ullam minima
          numquam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptates doloribus hic quod autem fugiat amet similique, nemo,
          suscipit odio dolores id nesciunt harum officia illo consequuntur cum
          ullam minima numquam? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptates doloribus hic quod autem fugiat amet
          similique, nemo, suscipit odio dolores id nesciunt harum officia illo
          consequuntur cum ullam minima numquam?
        </Typography>
        <Button className='learn_more_btn' variant='contained'>
          научи повече
        </Button>
      </div>
    </div>
  );
}

export default Info;
