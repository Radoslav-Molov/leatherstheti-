import React from "react";
import {
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  RadioGroup,
  Radio,
} from "@mui/material";

export default function AddressForm() {
  const [radioValue, setRadioValue] = React.useState("sad");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setRadioValue(event.target.defaultValue);
  };

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Данни за доставка
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='firstName'
            name='firstName'
            label='Име'
            fullWidth
            autoComplete='given-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='lastName'
            name='lastName'
            label='Фамилия'
            fullWidth
            autoComplete='family-name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id='city'
            name='city'
            label='Град'
            fullWidth
            autoComplete='shipping address-level2'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='state'
            required
            name='state'
            label='Телефонен номер'
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12} className='company_select'>
          <Typography component='p'>
            Работим само с <strong>'Еконт'</strong>! В полето долу може да
            попълните адрес на техен офис или личен адрес за доставка.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='address1'
            name='address1'
            label='Офис на еконт / Личен адрес'
            fullWidth
            autoComplete='shipping address-line1'
          />
        </Grid>

        <Grid item xs={12} sm={6} className='company_select'>
          <TextField
            id='state'
            name='state'
            label='Код за отстъпка'
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
