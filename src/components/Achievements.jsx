import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTeam,
  AiOutlineDollarCircle,
  AiOutlineCalendar,
  AiOutlineTrophy,
} from "react-icons/ai";

const Achievements = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#383838", color: "white", padding: "40px 0" }}
    >
      <Row className="text-center achievements">
        <Col>
          <AiOutlineTeam style={{ fontSize: "50px", color: "#f8d12f" }} />
          <h3 style={{ color: "#f8d12f" }}>1500+</h3>
          <p>Clients</p>
        </Col>
        <Col>
          <AiOutlineDollarCircle style={{ fontSize: "50px", color: "#f8d12f" }} />
          <h3 style={{ color: "#f8d12f" }}>400+</h3>
          <p>Lacs AUM</p>
        </Col>
        <Col>
          <AiOutlineCalendar style={{ fontSize: "50px", color: "#f8d12f" }} />
          <h3 style={{ color: "#f8d12f" }}>16+</h3>
          <p>Years of Experience</p>
        </Col>
        <Col>
          <AiOutlineTrophy style={{ fontSize: "50px", color: "#f8d12f" }} />
          <h3 style={{ color: "#f8d12f" }}>MDRT USA</h3>
          <p>
            <span style={{ fontWeight: "bold" }}>Gold Medalist</span> <br />
            & Other Prestigious Awards
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievements;
