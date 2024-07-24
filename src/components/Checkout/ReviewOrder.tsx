import React from "react";
import { List, Typography, ListItem, ListItemText, Grid } from "@mui/material";

const products = [{ name: "Портмоне", quantity: "2", price: "$69.99" }];
const addresses = ["Еконт", "Емил Марков"];

export default function Review() {
  return (
    <div id='review_order'>
      <Typography variant='h6' gutterBottom>
        Обобщение на поръчката
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className='listItem' key={product.name}>
            <ListItemText primary={product.name} secondary={product.quantity} />
            <Typography variant='body2'>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className='listItem'>
          <ListItemText primary='Общо' />
          <Typography variant='subtitle1' className='total'>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className='title'>
            Адрес за доставка
          </Typography>
          <Typography gutterBottom>Ивака Мадафака</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
