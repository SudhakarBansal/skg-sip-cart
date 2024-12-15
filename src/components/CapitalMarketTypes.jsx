import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ChartSpline, BookCheck, HandCoins } from "lucide-react";

const CapitalMarketTypes = () => {
  const investments = [
    {
      title: "EQUITIES",
      description:
        "Equities refer to purchasing and holding company shares in stock markets, offering potential gains through dividends and capital appreciation.",
      icon: <ChartSpline size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "PREFERENCE SHARE",
      description:
        "Preference shares grant shareholders priority in receiving dividends and a share of company profits before common shareholders.",
      icon: <BookCheck size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "DEBT INSTRUMENTS",
      description:
        "Debt instruments allow entities to raise capital with a documented agreement to repay lenders under specified contract terms.",
      icon: <HandCoins size={55} color="#00AEEF" />, // Icon
    },
  ];

  return (
    <Container className="py-5">
      <Row className="g-4">
        {investments.map((investment, index) => (
          <Col md={6} lg={4} key={index} className="d-flex align-items-start">
            <div className="me-3">{investment.icon}</div>
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "10px",
                  fontSize: "1.25rem",
                  color: "#333",
                }}
              >
                {investment.title}
              </h4>
              <p
                style={{
                  margin: "0",
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                }}
              >
                {investment.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CapitalMarketTypes;
