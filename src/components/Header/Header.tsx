import React from "react";
import { Link, Toolbar } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function Header(props: any) {
  const sections: any[] = [
    { title: "Начало", url: "/" },
    { title: "Продукти", url: "/products" },
    { title: "Всичко за нас", url: "/about" },
    { title: "Въпросник", url: "/faq" },
    { title: "Контакти", url: "#footer_wrapper" },
  ];
  return (
    <div id='header'>
      <Toolbar className='toolbar'>
        <img className='logo' src='/black-logo.png' alt='' />
        <div className='links_wrapper'>
          {sections.map((section: any) => (
            <Link
              color='inherit'
              noWrap
              key={section.title}
              variant='body2'
              href={section.url}
              className='toolbarLink'
            >
              {section.title}
            </Link>
          ))}
        </div>
        {/* <IconButton className='cart_button'>
          <ShoppingCart className='cart_icon' />
        </IconButton> */}
      </Toolbar>
    </div>
  );
}
