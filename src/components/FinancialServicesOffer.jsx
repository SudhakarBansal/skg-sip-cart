import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaClipboardList, FaCogs, FaChartLine } from 'react-icons/fa';  
import offerImg from '../assets/weOffer.webp'

const FinancialServicesOffer = () => {
  return (
    <Container fluid className="p-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className='d-flex justify-content-center flex-column'>
            <h2 style={{ fontWeight: '700' }}>WHAT WE OFFER</h2>
            <div className='mb-4 underline-div'></div>
          </div>
          <p className="mb-4">
            Purchase of any financial products without consulting a financial planner is like taking a
            medicine without doctor’s diagnosis. We offer our expert advice for choosing the best
            investments products which will lead to your financial freedom.
          </p>

          <Row className="my-3 align-items-center">
            <Col xs={2} className="text-center offer-icons">
              <FaClipboardList size={50} />
            </Col>
            <Col>
              <h5>PLAN</h5>
              <p>Get customized advice across investments, goals, expenses, insurance, loans, estate planning, and taxes.</p>
            </Col>
          </Row>

          <Row className="my-3 align-items-center">
            <Col xs={2} className="text-center offer-icons">
              <FaCogs size={50} />
            </Col>
            <Col>
              <h5>EXECUTE</h5>
              <p>Implement your customized advice by buying all the recommended financial products on one single platform.</p>
            </Col>
          </Row>

          <Row className="my-3 align-items-center">
            <Col xs={2} className="text-center offer-icons">
              <FaChartLine size={50} />
            </Col>
            <Col>
              <h5>MANAGE</h5>
              <p>Track your journey and review/rebalance your investments to make sure they are aligned with your goals.</p>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Image
            src={offerImg} // Replace with actual image path
            loading='lazy'
            alt="Business Discussion"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FinancialServicesOffer;
