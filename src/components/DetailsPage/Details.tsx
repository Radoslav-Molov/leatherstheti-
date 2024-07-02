import CarouselLib from "../CarouselLib/CarouselLib";
import mock from "../../utils/mock.json";
import { Button, Typography } from "@mui/material";

function Details() {
  const count: number = mock[0].count;

  const generatePics = (count: number) => {
    const path = mock[0].src;
    const arr = [];

    for (let i = 0; i < count; i++) {
      arr.push(path + i.toString() + ".jpg");
    }

    return arr;
  };

  const pics = generatePics(count);

  return (
    <>
      <Typography id='detail_heading' component='h2' variant='h3'>
        {mock[0].title}
      </Typography>
      <div id='details_wrapper'>
        <div id='detail_carousel'>
          <CarouselLib images={pics} />
        </div>
        <div id='details_info_wrapper'>
          <div id='details_product'>
            <Typography component='h3' variant='h5'>
              {mock[0].description}
            </Typography>
            <div id='details_characteristics'>
              <Typography component='h4' variant='h4'>
                Характеристики:
              </Typography>
              {mock[0].characteristics?.map((characteristic) => {
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
