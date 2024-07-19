import TextField from "@mui/material/TextField";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const hasError = false;
  return (
    <div id='footer_wrapper'>
      <h3 className='footer_heading'>Бюлетин</h3>
      <p className='footer_text'>
        Абонирайте се, за да получавате информация за всички най-нови продукти,
        отстъпки и новини.
      </p>
      <div className='footer_form'>
        {!hasError ? (
          <TextField id='outlined-search' label='Имейл адрес' type='search' />
        ) : (
          <TextField
            error={true}
            id='outlined-error'
            label='Error'
            defaultValue='Имейл адрес'
          />
        )}
        <button className='footer_button'>абонирам се</button>
      </div>
      <div className='footer_low-wrapper'>
        <div className='footer_links'>
          <Link to='/shipping'>Доставка и Връщане</Link>
          <Link to='/privacy&policy'>Политика за поверителност</Link>
          <Link to='/terms&conditions'>Общи условия</Link>
          <Link to='/faq'>Въпросник</Link>
        </div>
        <div className='footer_socials'>
          <h2>Последвайте ни</h2>
          <div className='socials_icons'>
            <a
              href='https://www.etsy.com/shop/Leathersthetic'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social_icon' src='/etsy-logo.svg' alt='Etsy' />
            </a>
            <a
              href='https://www.instagram.com/leathersthetic/'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social_icon' src='/insta.png' alt='Instagram' />
            </a>
            <a
              href='https://www.facebook.com/leatherstetic'
              target='_blank'
              rel='noreferrer'
            >
              <img id='face' src='/face.png' alt='Facebook' />
            </a>
          </div>
        </div>
        <div className='footer_contacts'>
          <p>Контакти</p>
          <span>
            Имейл:{" "}
            <a href='mailto:info@leathersthetic.com'>info@leathersthetic.com</a>
          </span>
          <span>Телефон: +359876404445</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
