import TextField from "@mui/material/TextField";
import React from "react";

function Footer() {
  const hasError = false;
  return (
    <div id='footer_wrapper'>
      <h3 className='footer_heading'>Newsletter</h3>
      <p className='footer_text'>
        Subscribe to be updated with all the latest products, discounts and
        news.
      </p>
      <div className='footer_form'>
        {!hasError ? (
          <TextField id='outlined-search' label='Email Address' type='search' />
        ) : (
          <TextField
            error={true}
            id='outlined-error'
            label='Error'
            defaultValue='Email Address'
          />
        )}
        <button className='footer_button'>subscribe</button>
      </div>
      <div className='footer_low-wrapper'>
        <div className='footer_links'>
          <a href=''>Help</a>
          <a href=''>Shipping</a>
          <a href=''>Privacy policy</a>
          <a href=''>Terms and conditions</a>
          <a href=''>FAQs</a>
        </div>
        <div className='footer_socials'>
          <h2>Follow</h2>
          <div className='socials_icons'>
            <a
              href='https://www.etsy.com/shop/Leathersthetic'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social_icon' src='etsy-logo.svg' alt='Etsy' />
            </a>
            <a
              href='https://www.instagram.com/leathersthetic/'
              target='_blank'
              rel='noreferrer'
            >
              <img className='social_icon' src='insta.png' alt='Instagram' />
            </a>
            <a
              href='https://www.facebook.com/leatherstetic'
              target='_blank'
              rel='noreferrer'
            >
              <img id='face' src='face.png' alt='Facebook' />
            </a>
          </div>
        </div>
        <div className='footer_contacts'>
          <p>Contacts</p>
          <span>
            Email:{" "}
            <a href='mailto:leathersthetic@gmail.com'>
              leathersthetic@gmail.com
            </a>
          </span>
          <span>Phone: +359888888888888</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
