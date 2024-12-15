import { Container, Row, Col, Image } from "react-bootstrap";
import mutualFundImg from "../assets/mutual-funds.webp";
import FundTypesSection from "./FundTypesSection";

const MutualFunds = () => {
  return (
    <Container className="py-5">
    <Row className="align-items-center my-5">
      {/* Image Section */}
      <Col md={5}>
        <Image
          src={mutualFundImg}
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
          <h2 style={{ fontWeight: "700" }}>Mutual Funds</h2>
          <div className="mb-4 underline-div"></div>
        </div>
        <p>
          A mutual fund is a professionally managed investment vehicle that
          collects funds from multiple investors to purchase securities.
          These investors can be individuals or institutions.{" "}
        </p>
        <p>
          Mutual funds offer both benefits and drawbacks compared to
          directly investing in individual securities. The key benefits
          include economies of scale, greater diversification, enhanced
          liquidity, and professional management of investments. However,
          investors may also incur various fees and expenses.
        </p>
        <p>
          Mutual funds come in different forms, such as open-end funds, unit
          investment trusts, and closed-end funds. Exchange-traded funds
          (ETFs), a type of open-end fund or unit investment trust, are
          traded on exchanges. Similarly, some closed-end funds function
          like ETFs as they are also traded on stock exchanges, enhancing
          their liquidity.{" "}
        </p>
      </Col>
    </Row>
    <FundTypesSection />
  </Container>
  )
}

export default MutualFunds