import React from "react";
import "../css/PricingPage.css";

const benefitsData = [
  {
    heading: "1.2Cr/Year",
    para: "Highest Fresher Packages",
  },
  {
    heading: "1.2Cr/Year",
    para: "Highest Fresher Packages",
  },
  {
    heading: "1.2Cr/Year",
    para: "Highest Fresher Packages",
  },
  {
    heading: "1.2Cr/Year",
    para: "Highest Fresher Packages",
  },
];

const whatYouGetData = [
  {
    para: "100+ Hrs Live Content",
  },
  {
    para: "50+ Hrs Contest",
  },
  {
    para: "500+ Problems",
  },
  {
    para: "Includes an interview bootcamp and access to a mentor network",
  },
  {
    para: "Enjoy access to our content for one year  (paid extensions available)",
  },
  {
    para: "Flexible payment options, including no-cost EMI, are available.",
  },
];

function Pricing() {
  return (
    <div className="pricingContainer">
      <div className="pricingleftContent">
        <div className="leftContent">
          <div className="details">
            <h1 className="boldMediumTexts">
              Invest in skills, <br />
              <span className="gradientTexts">earn 10X </span>of what you paid.
            </h1>
            <p className="regularMediumTexts">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="checkBoxDivs">
            {benefitsData.map((item, index) => (
              <div className="itemDiv">
                <div className="check"></div>
                <div className="itemDetail">
                  <p className="boldSmallText">1.2Cr/ Year</p>
                  <p className="regularMediumTexts">
                    Highest Freshers packages
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pricingRightContent">
        <div className="card">
          {/* card top */}
          <div className="cardTop">
            <p className="regularMediumTexts">Premium Victory Batch</p>
            <p className="lowBoldMediumtexts"> &#8377;19,999 </p>
            <p className="boldMainTexts gradientTexts"> &#8377; 13,999</p>
          </div>

          {/* bottom */}
          <div className="cardBottom">
            {whatYouGetData.map((item, index) => (
              <div className="itemDiv">
                <div className="check"></div>
             
                  <p className="regularMediumTexts">
                    {item.para}
                  </p>
       
              </div>
            ))}

            <div className="cardBtn">
                <button className="miniTexts">Join Now </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
