import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { CircleGauge, ShieldCheck, Layers } from "lucide-react";

const InvestmentStrategies = () => {
  const strategies = [
    {
      title: "Aggressive",
      description:
        "An aggressive strategy focuses on maximizing returns by taking higher risks, often investing in high-growth assets.",
      icon: <CircleGauge size={55} color="red" />, // Icon
    },
    {
      title: "Defensive",
      description:
        "A defensive approach prioritizes stability, with regular portfolio rebalancing, high-quality investments, and risk management strategies like diversification and stop-loss orders.",
      icon: <ShieldCheck size={55} color="green" />, // Icon
    },
    {
      title: "Hybrid",
      description:
        "A hybrid strategy blends asset classes to create a balanced portfolio, combining growth and stability through diversification.",
      icon: <Layers size={55} color="#00AEEF" />, // Icon
    },
  ];

  return (
    <Container className="py-5">
      <Row className="g-4">
        {strategies.map((strategy, index) => (
          <Col md={6} lg={4} key={index} className="d-flex align-items-start">
            <div className="me-3">{strategy.icon}</div>
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "10px",
                  fontSize: "1.25rem",
                  color: "#333",
                }}
              >
                {strategy.title}
              </h4>
              <p
                style={{
                  margin: "0",
                  color: "#555",
                  fontSize: "0.95rem",
                  lineHeight: "1.4",
                }}
              >
                {strategy.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InvestmentStrategies;
