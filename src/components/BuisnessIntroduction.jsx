import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import teamImg from '../assets/team.jpg'

const BuisnessIntroduction = () => {
  return (
    <Container fluid className="p-5" style={{backgroundColor:'#f6f6f6'}}>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={teamImg}
            alt="Business Meeting"
            className="img-fluid"
          />
        </Col>
        <Col md={6} className="px-5">
          <h2 style={{ fontWeight: '700'}}>Welcome To Skg-Sip-Cart</h2>
          <p>
            We are a leading personal financial advisory firm guiding investors to realise their dreams by planning and managing their wealth since 2004. Serving 2500+ investors across the Delhi NCR, we believe every client is special. Therefore, our team of qualified and experienced professionals talks to you and makes sure that our solutions are designed to match your specific dreams and goals.
          </p>
          <h3 style={{ fontWeight: '700'}} id='my-2'>Our Mission</h3>
          <p>To assist and guide the investors in achieving their financial goals with peace of mind.</p>
          <h3 style={{ fontWeight: '700'}} id='my-2'>Our Vision</h3>
          <p>To be a leading personal financial advisor through a suitable mix of technology and human approach.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BuisnessIntroduction;

