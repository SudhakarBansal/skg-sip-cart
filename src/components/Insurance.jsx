import { Container, Row, Col, Image } from "react-bootstrap";
import insuranceimg from "../assets/Insurance.webp";
import InsuranceTypesSection from "./InsuranceTypesSection";

const Insurance = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center my-5">
        {/* Image Section */}
        <Col md={5}>
          <Image
            src={insuranceimg}
            alt="Mutual Funds"
            fluid
            loading="lazy"
            className="rounded mb-3"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </Col>

        {/* Text Section */}
        <Col md={7} className="px-4">
          <div className="d-flex justify-content-center flex-column">
            <h2 style={{ fontWeight: "700" }}>Insurance</h2>
            <div className="mb-4 underline-div"></div>
          </div>
          <p>
            Insurance is a contractual agreement where an insurance company (the
            insurer) agrees to cover losses or damages sustained by another
            party (the insured) in return for a specific payment known as the
            premium.
          </p>
          <p>
            The insured is provided with a contract, referred to as the
            insurance policy, which outlines the terms, conditions, and
            circumstances under which compensation will be given. The premium is
            the amount charged by the insurer to the policyholder for the
            coverage described in the policy.
          </p>
        </Col>
      </Row>
      <InsuranceTypesSection />
    </Container>
  );
};

export default Insurance;
