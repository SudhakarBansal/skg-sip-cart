import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { HeartPulse, ShieldCheck, Cross, AlertTriangle } from "lucide-react";

const InsuranceTypesSection = () => {
  const insuranceTypes = [
    {
      title: "LIFE INSURANCE",
      description:
        "Life insurance ensures financial protection for your loved ones by providing a payout to the beneficiaries in case of the insured's demise, in return for regular premiums.",
      icon: <HeartPulse size={55} color="#00AEEF" />, // Icon for Life Insurance
    },
    {
      title: "HEALTH INSURANCE",
      description:
        "Health insurance covers medical and surgical expenses, ensuring you receive quality healthcare without financial stress. Costs are either reimbursed or paid directly to the provider.",
      icon: <ShieldCheck size={55} color="#00AEEF" />, // Icon for Health Insurance
    },
    {
      title: "PERSONAL ACCIDENT COVER",
      description:
        "Personal accident cover provides financial compensation for accidental death, permanent disability, or temporary injuries, ensuring income replacement and peace of mind.",
      icon: <Cross size={55} color="#00AEEF" />, // Icon for Personal Accident
    },
    {
      title: "CRITICAL ILLNESS COVER",
      description:
        "Critical illness cover provides a lump sum payout to manage costs associated with severe diseases, including medical treatment and lost income, protecting your family's financial security.",
      icon: <AlertTriangle size={55} color="#00AEEF" />, // Icon for Critical Illness Cover
    },
  ];

  return (
    <Container className="py-5">
      <Row className="my-5">
        {insuranceTypes.map((insurance, index) => (
          <Col md={6} key={index} className="d-flex mb-4 align-items-start">
            <div className="me-3">{insurance.icon}</div>
            <div>
              <h4
                style={{
                  fontWeight: "700",
                  marginBottom: "8px",
                  fontSize: "1.25rem",
                  color: "#333",
                }}
              >
                {insurance.title}
              </h4>
              <p
                style={{
                  marginBottom: "0",
                  color: "#555",
                  fontSize: "0.95rem",
                }}
              >
                {insurance.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InsuranceTypesSection;
