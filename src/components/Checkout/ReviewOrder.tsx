import React from "react";
import { List, Typography, ListItem, ListItemText, Grid } from "@mui/material";

const products = [{ name: "Product 1", desc: "A nice thing", price: "$9.99" }];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];

export default function Review() {
  return (
    <div id='review_order'>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className='listItem' key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant='body2'>{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className='listItem'>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className='total'>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className='title'>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
