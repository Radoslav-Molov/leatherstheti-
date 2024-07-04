import { Box, Button, Modal, Switch, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function Biscuits() {
  const [cookiesConsent, setCookiesConsent] = useCookies(["cookiesConsent"]);
  const [shouldModalAppear, setShouldModalAppear] = useState(false);
  const [modalSettingsPage, setModalSettingsPage] = useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    Object.keys(cookiesConsent).length === 0
      ? setShouldModalAppear(true)
      : setShouldModalAppear(false);
  }, []);

  const handleCookieAccept = () => {
    let currentDate = new Date();
    let current;
    if (currentDate.getMonth() == 11) {
      current = new Date(currentDate.getFullYear() + 1, 0, 1);
    } else {
      current = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      );
    }

    setCookiesConsent("cookiesConsent", true, { expires: current });
    handleClose();
  };

  const handleCookieSettings = () => {
    setModalSettingsPage(true);
  };

  const handleClose = () => {
    setShouldModalAppear(false);
  };
  console.log(cookiesConsent);
  return (
    <Modal
      open={shouldModalAppear}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {!modalSettingsPage ? (
          <>
            <Typography variant='h6' component='h2'>
              Съгласие за използването на бисквитки
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Този уебсайт използва бисквитки, за да ви осигури най-доброто
              потребителско изживяване. Натиснете "Приемам", за да се съгласите
              с използването на всички бисквитки, или "Настройки", за да
              изберете кои бисквитки искате да приемете.
            </Typography>
            <div className='modal_btn_wrapper'>
              <Button className='modal_btn' onClick={handleCookieAccept}>
                Приеми бисквитки
              </Button>
              <Button className='modal_btn' onClick={handleCookieSettings}>
                Настройки
              </Button>
            </div>
          </>
        ) : (
          <>
            <Typography variant='h6' component='h2'>
              Настройки за бисквитки
              <div className='accept_all'>
                <Typography variant='h6' component='h3'>
                  Приеми всички
                </Typography>
                <Switch
                  onChange={handleChange}
                  value='asdsadasd'
                  color='default'
                />
              </div>
            </Typography>
            <div className='biscuit_option'>
              <Typography variant='h6' component='h3'>
                Съгласие за използването на бисквитки
              </Typography>
              <Switch onChange={handleChange} color='default' />
              <Typography className='biscuit_purpose' component='p'>
                Тези бисквитки са необходими за функционирането на уебсайта и не
                могат да бъдат изключени.
              </Typography>
            </div>
            <div className='biscuit_option'>
              <Typography variant='h6' component='h3'>
                Съгласие за използването на бисквитки
              </Typography>
              <Switch onChange={handleChange} color='default' />
              <Typography className='biscuit_purpose' component='p'>
                Тези бисквитки са необходими за функционирането на уебсайта и не
                могат да бъдат изключени.
              </Typography>
            </div>
            <div className='biscuit_option'>
              <Typography variant='h6' component='h3'>
                Съгласие за използването на бисквитки
              </Typography>
              <Switch onChange={handleChange} color='default' />
              <Typography className='biscuit_purpose' component='p'>
                Тези бисквитки са необходими за функционирането на уебсайта и не
                могат да бъдат изключени.
              </Typography>
            </div>
            <div className='modal_btn_wrapper'>
              <Typography className='biscuit_purpose' component='p'>
                С използването на сайта се съгласявате с ....
              </Typography>
              <Button className='modal_btn' onClick={handleCookieAccept}>
                Запази избора си
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
}

export default Biscuits;
