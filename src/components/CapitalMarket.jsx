import { Container, Row, Col, Image } from "react-bootstrap";
import CapitalMarketImg from "../assets/CapitalMarket.webp";
import CapitalMarketTypes from "./CapitalMarketTypes";

const CapitalMarket = () => {
  return (
    <div className="w-full" style={{ backgroundColor: "#f6f6f6" }}>
        <Container className="py-5">
          <Row className="align-items-center my-5">
            {/* Text Section */}
            <Col md={7} className="px-4">
              <div className="d-flex justify-content-center flex-column">
                <h2 style={{ fontWeight: "700" }}>Capital Market</h2>
                <div className="mb-4 underline-div"></div>
              </div>
              <p>
                A capital market is a financial marketplace where long-term debt
                instruments and equity-backed securities are traded. It serves
                as a conduit, channeling savings from investors to organizations
                or governments that utilize these funds for long-term,
                productive purposes, such as large-scale investments.
              </p>
              <p>
                Capital markets consist of two segments: the primary market,
                where new securities are issued, and the secondary market, where
                existing securities are bought and sold. The stock market and
                bond market are the most prominent examples of capital markets.
              </p>
              <p>
                The primary goal of capital markets is to enhance transactional
                efficiency. They connect investors with capital to entities that
                need funding, providing a platform for the exchange of
                securities.
              </p>
            </Col>
            {/* Image Section */}
            <Col md={5}>
              <Image
                src={CapitalMarketImg}
                alt="Mutual Funds"
                fluid
                loading="lazy"
                className="rounded mt-3"
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Col>
          </Row>
          <CapitalMarketTypes />
        </Container>
      </div>
  )
}

export default CapitalMarket;