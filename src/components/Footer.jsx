import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import logoImg from "../assets/logo.png";
import {
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const copyrightTimeStamp = new Date().getFullYear();

  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/people/SKG-SIP-CART/100063640616719/"
              target="_blank"
              className="me-4 text-reset"
              aria-label="Facebook"
              title="Facebook"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@skgsipcart"
              className="me-4 text-reset"
              target="_blank"
              aria-label="YouTube"
              title="YouTube"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/skgsipcart"
              className="me-4 text-reset"
              target="_blank"
              aria-label="Instagram"
              title="Instagram"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/917710347319?text=Hi%20Sir!"
              className="me-4 text-reset"
              target="_blank"
              aria-label="WhatsApp"
              title="Whatsapp"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:skgsipcart@gmail.com"
              className="me-4 text-reset"
              target="_blank"
              aria-label="Email"
              title="Gmail"
              rel="noreferrer"
            >
              <CgMail />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <img
                  src={logoImg}
                  loading="lazy"
                  alt="Skg Sip Cart Logo"
                  className="logoimg"
                  style={{ width: "100%", maxWidth: "200px" }}
                />
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="/" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Laravel
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="/" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaLocationDot className="me-2" aria-hidden="true" />
                  118 FIRST FLOOR AGGARWAL E MALL SECTOR 7 ROHINI DELHI 110085,
                  Delhi, India, Delhi
                </p>
                <p>
                  <CgMail className="me-3" aria-hidden="true" />
                  skgsipcart@gmail.com
                </p>
                <p>
                  <FaWhatsapp className="me-3" aria-hidden="true" />
                  +(91) 98714 84948, 99108 99008
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {copyrightTimeStamp} Copyright &nbsp;
          <a className="text-reset fw-bold" href="https://skgsipcart.com/">
            skgsipcart.com
          </a>
          &nbsp; | All Rights Reserved.
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
