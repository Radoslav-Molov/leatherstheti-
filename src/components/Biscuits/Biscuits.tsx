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
  const [cookies, setCookies] = useCookies();
  const [shouldModalAppear, setShouldModalAppear] = useState(false);
  const [modalSettingsPage, setModalSettingsPage] = useState(false);
  const [checked, setChecked] = useState({
    all: false,
    session: false,
    analytic: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    switch (event.target.defaultValue) {
      case "all":
        setChecked({
          all: event.target.checked,
          session: event.target.checked,
          analytic: event.target.checked,
        });
        break;
      case "session":
        setChecked({ ...checked, session: event.target.checked });
        break;
      case "analytic":
        setChecked({ ...checked, analytic: event.target.checked });
        break;
    }
  };

  useEffect(() => {
    Object.keys(cookies).length === 0
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

    let acceptedAll:
      | boolean
      | {
          all: boolean;
          session: boolean;
          analytic: boolean;
        } = false;

    if (!checked.all && !checked.analytic && !checked.session) {
      acceptedAll = { ...checked, all: true };
    }

    handleClose();
    setCookies(
      "cookiesConsent",
      JSON.stringify(acceptedAll ? acceptedAll : checked),
      {
        expires: current,
      }
    );
  };

  const handleCookieSettings = () => {
    setModalSettingsPage(true);
  };

  const handleClose = () => {
    setShouldModalAppear(false);
  };

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
                  checked={checked.all}
                  onChange={handleChange}
                  value='all'
                  color='default'
                />
              </div>
            </Typography>
            <div className='biscuit_option'>
              <Typography variant='h6' component='h3'>
                Необходими бисквитки
              </Typography>
              <Typography className='biscuit_purpose' component='p'>
                Тези бисквитки са нужни за правилното функциониране на сайта,
                като например преференции или попълнени формуляри. С
                използването на сайта се съгласявате те да бъдат записани на
                устройството.
              </Typography>
            </div>
            <div className='biscuit_option'>
              <Typography variant='h6' component='h3'>
                Сесийни бисквитки
              </Typography>
              <Switch
                value='session'
                checked={checked.session}
                disabled={checked.all}
                onChange={handleChange}
                color='default'
              />
              <Typography className='biscuit_purpose' component='p'>
                Сесийните бисквитки, известни също като "временни бисквитки",
                помагат на уебсайтовете да разпознават потребителите и
                информацията, предоставена от тях при навигация през уебсайта.
                След като уеб браузърът бъде затворен, бисквитките се изтриват
                или определено време след това.
              </Typography>
            </div>
            <div className='biscuit_option'>
              <Typography variant='h6' component='h3'>
                Аналитични бисквитки
              </Typography>
              <Switch
                value='analytic'
                onChange={handleChange}
                color='default'
                checked={checked.analytic}
                disabled={checked.all}
              />
              <Typography className='biscuit_purpose' component='p'>
                Тези бисквитки ни позволяват да броим посещенията и източниците
                на трафик, така че да можем да измерим и подобрим работата на
                нашия сайт.
              </Typography>
            </div>
            <div className='modal_btn_wrapper'>
              <Typography className='biscuit_purpose' component='p'>
                С използването на сайта се съгласявате с{" "}
                <a className='anchor' href='/privacy&policy'>
                  политиката за поверителност
                </a>
              </Typography>
              <Button
                id={modalSettingsPage ? "single_btn" : ""}
                className='modal_btn'
                onClick={handleCookieAccept}
              >
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
