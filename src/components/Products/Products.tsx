import React from "react";
import mock from "../../utils/mock.json";
import ProductCard from "./ProductCard/ProductCard";
import { Breadcrumbs, Link, Typography } from "@mui/material";

function Products() {
  return (
    <div id='products_page'>
      <div id='categories_select'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='/'>
            Портфейли
          </Link>
          <Link
            underline='hover'
            color='inherit'
            href='/material-ui/getting-started/installation/'
          >
            Аксесоари
          </Link>
          <Link
            underline='hover'
            color='inherit'
            href='/material-ui/getting-started/installation/'
          >
            Чанти
          </Link>
          <Link
            underline='hover'
            color='inherit'
            href='/material-ui/getting-started/installation/'
          >
            Картодържачи
          </Link>
        </Breadcrumbs>
      </div>
      <div id='products_wrapper'>
        {mock.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
