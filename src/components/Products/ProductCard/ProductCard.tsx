import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Product from "../../../utils/types";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Link className='product_card_wrapper' to='/details'>
      <Card className='product_card'>
        <CardMedia
          className='product_card_img'
          image={props.product.mainImg}
          title={props.product.title}
        />
        <CardContent className='card_content'>
          <Typography gutterBottom variant='h5' component='div'>
            {props.product.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.product.description}
          </Typography>
        </CardContent>
        <CardActions className='cart_button'>
          <Typography component='p'>123 лв.</Typography>
        </CardActions>
      </Card>
    </Link>
  );
}
