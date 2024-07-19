import React from "react";
import mock from "../../utils/mock.json";
import ProductCard from "./ProductCard/ProductCard";
import { Breadcrumbs, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Products() {
  return (
    <div id='products_page'>
      <div id='categories_select'>
        <Breadcrumbs aria-label='breadcrumb' className='products_crumb'>
          <Link underline='hover' color='inherit'>
            <RouterLink className='crumb_links' to='/'>
              Портфейли
            </RouterLink>
          </Link>
          <Link underline='hover' color='inherit'>
            <RouterLink className='crumb_links' to='/'>
              Аксесоари
            </RouterLink>
          </Link>
          <Link underline='hover' color='inherit'>
            <RouterLink className='crumb_links' to='/'>
              Чанти
            </RouterLink>
          </Link>
          <Link underline='hover' color='inherit'>
            <RouterLink className='crumb_links' to='/'>
              Картодържачи
            </RouterLink>
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
