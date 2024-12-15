import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import teamImg from "../assets/team.webp";
import { Link } from "react-router-dom";

const BuisnessIntroduction = () => {
  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#f6f6f6" }}>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={teamImg}
            loading="lazy"
            alt="Business Meeting"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="px-5">
          <div className="d-flex justify-content-center flex-column text-uppercase">
            <h2 style={{ fontWeight: "700" }}>Welcome To Skg Sip Cart</h2>
            <div className="mb-4 underline-div"></div>
          </div>
          <p>
            We are a leading personal financial advisory firm guiding investors
            to realise their dreams by planning and managing their wealth from 16+ years.
            Serving 1500+ investors across the Delhi NCR, we believe every
            client is special. Therefore, our team of qualified and experienced
            professionals talks to you and makes sure that our solutions are
            designed to match your specific dreams and goals.
          </p>
          <h3 style={{ fontWeight: "700" }} id="my-2">
            Our Mission
          </h3>
          <p>
            To assist and guide the investors in achieving their financial goals
            with peace of mind.
          </p>
          <h3 style={{ fontWeight: "700" }} id="my-2">
            Our Vision
          </h3>
          <p>
            To be a leading personal financial advisor through a suitable mix of
            technology and human approach.
          </p>
          {/* Contact Us Button */}
          <div className="mt-4">
            <Link
              to="/contact"
              className="btn btn-primary px-4 py-2 rounded-1"
              style={{
                backgroundColor: "#007bff",
                color: "#fff",
              }}
            >
              Contact Us
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BuisnessIntroduction;
