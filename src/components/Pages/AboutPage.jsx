import React from "react";
import FinancialServicesOffer from "../FinancialServicesOffer";
import AboutUsImg from "../../assets/AboutUs.webp";
import Achievements from "../Achievements";

const AboutPage = () => {
  return (
    <>
      <img
        src={AboutUsImg}
        loading="lazy"
        alt="SKG SIP CART"
        style={{ width: "100%", minHeight: "45vh", objectFit: "cover" }}
      />
      <div className="container d-flex align-items-center flex-column mb-5">
        <h2 className="text-center mt-5" style={{ fontWeight: "700" }}>
          WELCOME TO SKG SIP CART
        </h2>
        <div className="mb-4 underline-div"></div>
        <div className="mx-5 mt-3 about-container-text">
          <p>
            SKG SIP CART is a financial services firm with over 15 years of
            experience, dedicated to delivering personalized and
            technology-driven solutions to our clients. Our team consists of
            highly skilled professionals, equipped with the knowledge and
            expertise needed to address diverse financial needs. We serve a wide
            array of clients, including individuals, families, and businesses,
            providing customized financial planning and advisory services.
          </p>
          <p>
            Our success is driven by a "customer-first" approach, ensuring that
            every solution we offer is designed to meet the unique needs of our
            clients. With extensive experience in the financial sector and a
            strong process-oriented system, we have consistently grown and built
            lasting relationships.
          </p>

          <h4>Our Services</h4>
          <ul>
            <li>
              Financial planning for life goals such as education, marriage, and
              retirement
            </li>
            <li>Tax planning and investment strategies</li>
            <li>Life and health insurance advisory</li>
            <li>Mutual funds, bonds, and portfolio management services</li>
            <li>Corporate and institutional financial solutions</li>
          </ul>
          <p>
            As part of our commitment to client satisfaction, we offer
            customized insurance broking services tailored to meet the specific
            requirements of each customer. Our team is skilled in handling
            complex claims and providing thorough, personalized support whenever
            needed.
          </p>

          <h4>Our Approach</h4>
          <p>
            We believe in fostering strong relationships based on trust and
            transparency. By understanding the unique financial situations of
            our clients, we are able to offer tailored solutions and expert
            guidance, ensuring that their financial goals are met efficiently
            and effectively.
          </p>

          <h4>Our Mission</h4>
          <p>
            Our mission is to help individuals and businesses manage financial
            risks by providing sound investment solutions and services. We aim
            to consistently add value to our clients through a commitment to
            customer satisfaction and timely service delivery.
          </p>

          <h4>Our Vision</h4>
          <p>
            We strive to be a leading provider of financial services, known for
            delivering personalized attention and high-quality service. Our goal
            is to cultivate a culture of growth, enthusiasm, and dedication,
            ensuring that we always go the extra mile for our clients.
          </p>
        </div>
      </div>
      <Achievements />
      <FinancialServicesOffer />
    </>
  );
};

export default AboutPage;
