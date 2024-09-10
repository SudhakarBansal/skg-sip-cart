import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactUsImg from '../../assets/ContactUs.png'


const ContactUs = () => {
  return (
    <>
      <img src={ContactUsImg} alt="SKG SIP CART" style={{ width: '100%', minHeight: '35vh', objectFit: 'cover' }} />
      <Container className="p-5">
        <Row className="align-items-center justify-content-around my-5">
          <Col md={5}>
            <h2 style={{ fontWeight: '700' }}>Contact Us</h2>
            <p>We are always here to assist you. Please feel free to contact us through the details provided or the form below, and our team will get back to you as soon as possible.</p>

            <h3 style={{ fontWeight: '700', marginTop: '20px' }}>Our Office</h3>
            <p>
              118 FIRST FLOOR AGGARWAL E MALL SECTOR 7 ROHINI DELHI 110085, India<br />
              Telephone: +(91) 98714 84948<br />
              E-mail: Skgsipcart@gmail.com
            </p>

            <h3 style={{ fontWeight: '700', marginTop: '20px' }}>Working Hours</h3>
            <p>
              Monday to Saturday: 10:00 AM - 4:00 PM<br />
              Sunday: Closed
            </p>
          </Col>

          <Col md={5}>
            <h2 style={{ fontWeight: '700', marginBottom: '30px' }}>Get in Touch</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Name" required style={{ height: '50px', fontSize: '16px' }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Email" required style={{ height: '50px', fontSize: '16px' }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={5} placeholder="Message" required style={{ fontSize: '16px' }} />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit" style={{ padding: '10px 30px', fontSize: '16px' }}>
                  Send
                </Button>
                <Button variant="outline-secondary" type="reset" style={{ padding: '10px 30px', fontSize: '16px' }}>
                  Reset
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <Row className='py-5'>
          <Col>
            <h3 style={{ fontWeight: '700' }}>Our Location</h3>
            <div style={{ width: '100%', height: '400px' }}>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.274427092067!2d77.1169692!3d28.7025485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03365e8bf7a1%3A0x7d3d293904c0229f!2sskg%20sip%20cart!5e0!3m2!1sen!2sin!4v1725874963867!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
