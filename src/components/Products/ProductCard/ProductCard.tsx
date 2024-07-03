import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Product from "../../../utils/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  console.log(props.product.src);
  return (
    <Card className='product_card'>
      <CardMedia
        className='product_card_img'
        image={props.product.mainImg}
        title={props.product.title}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {props.product.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {props.product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Купи</Button>
      </CardActions>
    </Card>
  );
}
