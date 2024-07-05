import React from "react";

function FAQ() {
  function toggleAccordion(e: any) {
    let itemToggle = undefined;
    if (e.target.nodeName === "BUTTON") {
      itemToggle = e.target.getAttribute("aria-expanded");
    } else if (e.target.nodeName === "SPAN") {
      itemToggle = e.target.offsetParent.getAttribute("aria-expanded");
    }

    if (itemToggle === "false") {
      e.target.nodeName === "BUTTON"
        ? e.target.setAttribute("aria-expanded", "true")
        : e.target.offsetParent.setAttribute("aria-expanded", "true");
    } else {
      e.target.nodeName === "BUTTON"
        ? e.target.setAttribute("aria-expanded", "false")
        : e.target.offsetParent.setAttribute("aria-expanded", "false");
    }
  }

  return (
    <div className='container'>
      <h2>Често задавани въпроси</h2>
      <div className='accordion'>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-1'
            aria-expanded='false'
          >
            <span className='accordion-title'>С какъв вид кожа работите?</span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Работя с висококачествена, италианска пълнозърнеста кожа,
              доставена от реномирани доставчици. Пълнозърнестатат кожа запазва
              естествените характеристики на материала, включително текстурата и
              уникалните белези. Обработва се с растителни танини за около 4-6
              седмици, което я прави рядка и ценна.
              <br />
              Резултатът е издръжлива, екологична и устойчива кожа, която
              развива характерна патина с времето. Това я прави идеална за
              ежедневни изделия, които издържат на износване и са добра
              инвестиция във времето. Само 10% от всички кожи днес са обработени
              чрез растително дъбене, което гарантира, че притежавате нещо
              наистина специално.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-2'
            aria-expanded='false'
          >
            <span className='accordion-title'>
              Каква е разликата между растително дъбена кожа и другите видове
              кожа?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Растително дъбената кожа се произвежда чрез традиционен процес на
              обработка с растителни екстракти, което я прави екологично чист и
              устойчив продукт. Този процес не използва вредни химикали и
              резултатът е кожа, която е естествена, здрава и издръжлива. Тя има
              уникален външен вид и аромат и с времето придобива красива патина,
              което я прави още по-ценна, защото само този вид кожа има това
              качество.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-3'
            aria-expanded='false'
          >
            <span className='accordion-title'>
              Защо да изберете ръчно изработени кожени изделия?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Изработването на ръчно изработени кожени изделия изисква
              значително време и умения. Всеки етап от процеса се изпълнява с
              прецизност и внимание, което автоматизацията не може да постигне.
              Ръчната изработка притежава уникалност, която машинното
              производство не може да пресъздаде.
              <br />
              Всеки детайл е внимателно изпипан с човешка ръка, придавайки
              неповторимост и характер. Персонализацията е ключов аспект на
              ръчно изработените кожени изделия. Възможността да се добавят
              индивидуални характеристики прави всяко изделие уникално,
              отразявайки личния стил и предпочитания на собственика.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-4'
            aria-expanded='false'
          >
            <span className='accordion-title'>
              Предлагате ли опции за персонализация на кожените си изделия?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Да, предлагам. Персонализацията е важна за моите клиенти, затова
              предлагам различни опции за персонализация, като гравиране на
              инициали, избор на различни цветове или дори създаване на
              персонализирани дизайни. Свържете се с мен за повече информация
              как да персонализирате коженото си изделие.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-5'
            aria-expanded='false'
          >
            <span className='accordion-title'>
              Колко време отнема да получа поръчката си?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Тъй като всеки продукт е ръчно изработен по поръчка, моля, имайте
              предвид времето за обработка в допълнение към доставката.
              Обикновено поръчките се приемат, изработват и изпращат в рамките
              на 7 работни дни. След като бъдат изпратени, времето за доставка
              може да варира в зависимост от вашето местоположение и избрания
              метод за доставка. Ще получите номер за проследяване, след като
              поръчката ви бъде изпратена.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-6'
            aria-expanded='false'
          >
            <span className='accordion-title'>Примате ли поръчки на едро?</span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Да, приемам групови поръчки за фирми или събития. Независимо дали
              се интересувате от продажба на моите продукти във вашия магазин
              или поръчка за корпоративни подаръци, мога да удовлетворя вашите
              нужди. Моля, свържете се с мен на посочения имейл с вашите
              изисквания и ще се радвам да предоставя повече информация.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
