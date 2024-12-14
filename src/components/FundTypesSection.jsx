import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  BarChart2,
  DollarSign,
  PieChart,
  FileText,
  Layers,
  Database,
} from "lucide-react";

const FundTypesSection = () => {
  const funds = [
    {
      title: "EQUITY FUND",
      description:
        "Equity funds invest in a variety of equity securities, providing growth opportunities based on different investment strategies.",
      icon: <BarChart2 size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "ELSS FUND",
      description:
        "ELSS funds allow investors to save taxes under Section 80C while offering exposure to equity investments for wealth creation.",
      icon: <FileText size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "DEBT FUND",
      description:
        "Debt funds primarily hold fixed-income securities, offering stability and consistent returns over time.",
      icon: <DollarSign size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "SMALL CAP FUND",
      description:
        "Small cap funds invest in companies ranked outside the largest 250, offering higher growth potential with increased risk.",
      icon: <Layers size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "BALANCED FUND",
      description:
        "Balanced funds combine equities, bonds, and sometimes money market instruments to achieve diversified growth.",
      icon: <PieChart size={55} color="#00AEEF" />, // Icon
    },
    {
      title: "LARGE CAP FUND",
      description:
        "Large cap funds focus on the top 100 companies by market capitalization, offering stability and steady returns.",
      icon: <Database size={55} color="#00AEEF" />, // Icon
    },
  ];

  return (
    <Container className="py-5">
      <Row className="my-5">
        {funds.map((fund, index) => (
          <Col md={6} key={index} className="d-flex mb-4 align-items-start">
            <div className="me-3">{fund.icon}</div>
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "8px",
                  fontSize: "1.25rem",
                  color: "#333",
                }}
              >
                {fund.title}
              </h4>
              <p
                style={{
                  marginBottom: "0",
                  color: "#555",
                  fontSize: "0.95rem",
                }}
              >
                {fund.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FundTypesSection;
