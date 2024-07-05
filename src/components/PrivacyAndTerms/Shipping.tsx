import { Typography } from "@mui/material";
import React from "react";

function Shipping() {
  return (
    <div className='privacy_terms_wrapper'>
      <Typography variant='h4' component={"h2"}>
        Доставка и Връщане
      </Typography>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Обработка на поръчки
        </Typography>
        <Typography component={"p"}>
          Всички поръчки се обработват в рамките на 10 работни дни от датата на
          поръчката. Вие ще получите потвърждение по имейл, когато вашата
          поръчка е обработена и изпратена.
        </Typography>
      </div>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Срок за доставка
        </Typography>
        <Typography component={"p"}>
          Времето за доставка в България е от 1-2 работни дни след като
          поръчката е обработена.
        </Typography>
      </div>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Разходи за доставка
        </Typography>
        <Typography component={"p"}>
          Разходите за доставка ще бъдат изчислени и показани при завършване на
          поръчката. Ние предлагаме доставка чрез Еконт.
        </Typography>
      </div>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Политика за връщане
        </Typography>
        <Typography component={"p"}>
          Ако не сте доволни от вашата покупка, можете да върнете продуктите в
          рамките на 14 дни от датата на получаване, при условие че те са в
          оригиналното си състояние и опаковка. Продуктите трябва да бъдат
          неповредени, неносени и с всички етикети и опаковки. Моля, обърнете
          внимание, че персонализираните продукти не подлежат на връщане.
        </Typography>
      </div>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Процедура за връщане
        </Typography>
        <Typography component={"p"}>
          Свържете се с нас: Изпратете имейл на info@leathersthetic.com с
          информация за вашата поръчка и причината за връщането. Получаване на
          инструкции: Ние ще ви изпратим инструкции за връщане на продукта.
          Изпращане на продукта: Върнете продукта на посочения от нас адрес.
          Разходите за връщане са за сметка на клиента, освен ако продуктът не е
          дефектен или грешен.
        </Typography>
      </div>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Замяна
        </Typography>
        <Typography component={"p"}>
          Ако желаете да замените продукт, следвайте същата процедура като при
          връщане. Ние ще ви изпратим новия продукт след като получим върнатия
          артикул и го проверим. Възстановяване на средства Възстановяването на
          средства ще бъде извършено в рамките на 14 дни след получаването на
          върнатия продукт и проверката му. Сумата ще бъде върната по същия
          метод на плащане, който е бил използван при покупката.
        </Typography>
      </div>
      <div className='policy'>
        <Typography variant='h6' component={"h4"}>
          Контакти
        </Typography>
        <Typography component={"p"}>
          Ако имате въпроси или нужда от допълнителна информация относно нашата
          политика за доставка и връщане, моля, свържете се с нас на
          info@leathersthetic.com или на следния телефон: 0876404445.
        </Typography>
      </div>
      <div className='company_details'>
        <Typography variant='h6' component={"h5"}>
          Благодарим ви, че пазарувате при нас!
        </Typography>
      </div>
    </div>
  );
}

export default Shipping;
