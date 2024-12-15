import { Container, Row, Col, Image } from "react-bootstrap";
import PmsImg from "../assets/pmsImg.webp";
import InvestmentStrategies from "./InvestmentStrategies";

const Pms = () => {
  return (
    <div className="w-full" style={{ backgroundColor: "#f6f6f6" }}>
      <Container className="py-5">
        <Row className="align-items-center my-5">
          {/* Text Section */}
          <Col md={7} className="px-4">
            <div className="d-flex justify-content-center flex-column">
              <h2 style={{ fontWeight: "700" }}>PMS</h2>
              <div className="mb-4 underline-div"></div>
            </div>
            <p>
              Portfolio investments refer to a collection of assets grouped
              together, including transactions in equity securities, such as
              common stocks, and debt securities, such as banknotes, bonds, and
              debentures.
            </p>
            <p>
              These investments encompass a variety of securities, including
              stocks, bonds, and other investment vehicles. By diversifying a
              portfolio, investors can spread the risk of potential losses
              caused by the below-expected performance of one or more assets.
            </p>
          </Col>
          {/* Image Section */}
          <Col md={5}>
            <Image
              src={PmsImg}
              alt="Portfolio Managment services"
              fluid
              loading="lazy"
              className="rounded mt-3"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Col>
        </Row>
        <InvestmentStrategies/>
      </Container>
    </div>
  );
};

export default Pms;
