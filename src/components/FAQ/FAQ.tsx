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
      <h2>Frequently Asked Questions</h2>
      <div className='accordion'>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-1'
            aria-expanded='false'
          >
            <span className='accordion-title'>
              Why handmade leather goods price is expensive?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Crafting leather goods is an intricate process, involving
              significant time and effort to each piece. Unlike mass production,
              handmade items require detailed stitching and finishing that
              automation can't replicate. With years of experience, I ensure
              top-notch quality, contributing to the higher price point. Premium
              leather is the cornerstone of our goods, chosen for its durability
              and luxurious feel. While this quality material comes at a cost,
              it ages beautifully over time, adding value to your investment.
              <br />
              Customization options allow customers to personalize their
              products, from colors to unique designs. This bespoke service
              requires additional time and effort, impacting the overall price.
              Limited production adds exclusivity to my goods. Owning a handmade
              piece means owning a unique work of art, reflecting the passion
              and dedication of the craftsman.
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
              Why handmade leather goods is better then machined ones?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Handmade leather products embody the human touch, showcasing
              dedication, precision, and uniqueness. Crafted with attention to
              detail, they carry a narrative that evolves with each use. Made
              from premium Italian leather, handmade goods boast exceptional
              quality and durability. Every stitch and finish is meticulously
              done by hand, ensuring longevity and a timeless appeal.
              <br />
              Customization is a hallmark of handmade leather goods, allowing
              for personalized features to reflect individual style and
              preferences. This bespoke approach highlights the craftsman's
              commitment to creating something truly special. Also purchasing
              handmade leather goods supports artisans and their time,
              preserving traditional skills and benefiting local communities.
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
              What materials do you use in your handmade leather products?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              I use high-quality, genuine leather sourced from reputable
              suppliers. The leather I work with is vegetable tanned which means
              it is tanned using natural tannins from trees. The leather
              produced is more natural, eco-friendly and eventually develops its
              own unique patina, meaning that it only gets better with age.
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
              How do I care for my leather product?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Leather is a natural material that requires proper care to
              maintain its beauty. I recommend using a leather balm periodically
              to keep it moisturized and protected from drying out or cracking.
              Avoid exposing your leather goods to extreme temperatures or
              excessive moisture, and store them in a cool, dry place when not
              in use.
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
              Do you offer customization options for your leather goods?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Yes, I do! Personalization is important to my customers, so I
              offer various customization options such as embossing initials,
              choosing different colors, or even creating custom designs.
              Contact me for more information on how to personalize your leather
              item.
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
            <span className='accordion-title'>
              How long does it take to receive my order?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Since each product is handmade to order, please allow for
              processing time in addition to shipping. Typically, orders are
              processed and shipped within 10 business days. Once shipped,
              delivery times may vary depending on your location and chosen
              shipping method. You will receive a tracking number once your
              order has been dispatched.
            </p>
          </div>
        </div>
        <div className='accordion-item'>
          <button
            onClick={toggleAccordion}
            className='buttonExpand'
            id='accordion-button-7'
            aria-expanded='false'
          >
            <span className='accordion-title'>
              Do you offer wholesale or bulk ordering?
            </span>
            <span className='icon' aria-hidden='true'></span>
          </button>
          <div className='accordion-content'>
            <p>
              Yes, I do offer wholesale pricing for bulk orders. Whether you're
              interested in stocking my products in your store or purchasing for
              corporate gifts, I can accommodate your needs. Please reach out to
              me with your requirements, and I'll be happy to provide more
              information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
