import CarouselLib from "../CarouselLib/CarouselLib";
import mock from "../../utils/mock.json";
import { Button, Typography } from "@mui/material";

function Details() {
  const count = mock.Trifold.count;

  const generatePics = (count: number) => {
    const path = mock.Trifold.src;
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(path + (i + 1).toString() + ".jpg");
    }

    return arr;
  };

  const pics = generatePics(count);

  return (
    <>
      <Typography id='detail_heading' component='h2' variant='h3'>
        {mock.Trifold.title}
      </Typography>
      <div id='details_wrapper'>
        <div id='detail_carousel'>
          <CarouselLib images={pics} />
        </div>
        <div id='details_info_wrapper'>
          <div id='details_product'>
            <Typography component='h3' variant='h5'>
              {mock.Trifold.description}
            </Typography>
            <div id='details_characteristics'>
              <Typography component='h4' variant='h4'>
                Характеристики:
              </Typography>
              {mock.Trifold.characteristics?.map((characteristic) => {
                return (
                  <Typography component='p' variant='h5'>
                    {characteristic}
                  </Typography>
                );
              })}
            </div>
          </div>
        </div>
        <Button id='details_btn' variant='contained'>
          добави в количка
        </Button>
      </div>
    </>
  );
}

export default Details;
