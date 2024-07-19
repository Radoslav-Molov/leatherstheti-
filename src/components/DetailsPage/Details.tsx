import CarouselLib from "../CarouselLib/CarouselLib";
import mock from "../../utils/mock.json";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import HelpIcon from "@mui/icons-material/Help";

function Details() {
  const [radioValue, setRadioValue] = React.useState("no");
  const [colorChoice, setColorChoice] = React.useState(null);

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

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const handleColorChoice = (event: any) => {
    if (event.target.localName === "img") {
      setColorChoice(event.target.parentElement.value);
    } else if (event.target.localName === "button") {
      setColorChoice(event.target.value);
    }
  };

  return (
    <>
      <div id='details_wrapper'>
        <div id='detail_carousel'>
          <CarouselLib images={pics} />
        </div>
        <div id='details_info_wrapper'>
          <div id='details_product'>
            <Typography id='detail_heading' component='h4'>
              {mock[0].title}
            </Typography>
            <Typography component='h6'>{mock[0].description}</Typography>
            <div id='details_characteristics'>
              <Typography component='h5'>Характеристики:</Typography>
              {mock[0].characteristics?.map((characteristic) => {
                return <Typography component='p'>{characteristic}</Typography>;
              })}
            </div>
            <div id='customization_prompt'>
              <div id='radios_wrapper'>
                <Typography component='h5'>
                  Желаете ли къстъмизация
                  <Tooltip
                    enterTouchDelay={0}
                    title='Ако желаете натиснете "Да" и опишете'
                    placement='top-start'
                  >
                    <HelpIcon />
                  </Tooltip>
                </Typography>
                <RadioGroup
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='controlled-radio-buttons-group'
                  value={radioValue}
                  onChange={handleRadioChange}
                  row
                  id='radio_group_customization'
                >
                  <FormControlLabel
                    value='yes'
                    control={<Radio color='success' />}
                    label='Да'
                  />
                  <FormControlLabel
                    value='no'
                    control={<Radio color='secondary' />}
                    label='Не'
                  />
                </RadioGroup>
                <TextField
                  id='customization_text'
                  color='success'
                  fullWidth
                  required={radioValue === "yes"}
                  disabled={radioValue === "no"}
                  label='Къстъмизация'
                  variant='standard'
                />
              </div>
            </div>
            <div id='colors_wrapper'>
              <Typography component='h5'>Цветови гами:</Typography>
              <div id='color_choices'>
                <button onClick={handleColorChoice} value='green1'>
                  <img
                    src='https://media.istockphoto.com/id/186863068/photo/green-leather.jpg?s=612x612&w=0&k=20&c=6p9SEqx08JK6Vn0LhwsWWa9P0VSoI9_PpETnjdJh-Ag='
                    alt='green'
                  />
                </button>
                <button onClick={handleColorChoice} value='green'>
                  <img
                    src='https://media.istockphoto.com/id/186863068/photo/green-leather.jpg?s=612x612&w=0&k=20&c=6p9SEqx08JK6Vn0LhwsWWa9P0VSoI9_PpETnjdJh-Ag='
                    alt='green'
                  />
                </button>
                <button onClick={handleColorChoice} value='green2'>
                  <img
                    src='https://media.istockphoto.com/id/186863068/photo/green-leather.jpg?s=612x612&w=0&k=20&c=6p9SEqx08JK6Vn0LhwsWWa9P0VSoI9_PpETnjdJh-Ag='
                    alt='green'
                  />
                </button>
                <button onClick={handleColorChoice} value='green3'>
                  <img
                    src='https://media.istockphoto.com/id/186863068/photo/green-leather.jpg?s=612x612&w=0&k=20&c=6p9SEqx08JK6Vn0LhwsWWa9P0VSoI9_PpETnjdJh-Ag='
                    alt='green'
                  />
                </button>
                <button onClick={handleColorChoice} value='green5'>
                  <img
                    src='https://media.istockphoto.com/id/186863068/photo/green-leather.jpg?s=612x612&w=0&k=20&c=6p9SEqx08JK6Vn0LhwsWWa9P0VSoI9_PpETnjdJh-Ag='
                    alt='green'
                  />
                </button>
              </div>
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
