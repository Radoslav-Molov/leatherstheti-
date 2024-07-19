import React, { useEffect, useState } from "react";
import { Button, Link, Menu, MenuItem, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  const sections = [
    { title: "Начало", url: "/" },
    { title: "Продукти", url: "/products" },
    { title: "Всичко за нас", url: "/about" },
    { title: "Въпросник", url: "/faq" },
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id='header'>
      <Toolbar className='toolbar'>
        <img className='logo' src='/black-logo.png' alt='' />
        <div className='links_wrapper'>
          {windowWidth >= 900 ? (
            sections.map((section: any) => (
              <Link
                color='inherit'
                noWrap
                key={section.title}
                variant='body2'
                className='toolbarLink'
              >
                <RouterLink className='header_links' to={section.url}>
                  {section.title}
                </RouterLink>
              </Link>
            ))
          ) : (
            <div id='header_menu_wrapper'>
              <Button
                id='basic-button'
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup='true'
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {sections.map((section: any) => (
                  <Link
                    color='inherit'
                    noWrap
                    key={section.title}
                    variant='body2'
                    className='toolbarLink'
                  >
                    <MenuItem onClick={handleClose}>
                      <RouterLink className='header_links' to={section.url}>
                        {" "}
                        {section.title}
                      </RouterLink>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </div>
          )}
        </div>
        {/* <IconButton className='cart_button'>
          <ShoppingCart className='cart_icon' />
        </IconButton> */}
      </Toolbar>
    </div>
  );
}
