import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaChartPie,
  FaWallet,
  FaShieldAlt,
  FaBuilding,
  FaBriefcase,
  FaHome,
} from "react-icons/fa";

const ProductBasket = () => {
  const products = [
    {
      title: "Mutual Funds",
      description:
        "Diversify your investment portfolio with professionally managed mutual funds. Benefit from expert management, liquidity, and reduced risk through a wide array of asset classes.",
      icon: <FaChartPie size={40} className="text-primary" />,
    },
    {
      title: "Fixed Income",
      description:
        "Secure and stable income streams through a variety of fixed-income products, including NCDs, government bonds, and company deposits. Invest in reliable instruments that ensure steady returns.",
      icon: <FaWallet size={40} className="text-success" />,
    },
    {
      title: "Insurance",
      description:
        "Protect your financial future with tailored insurance solutions. Our comprehensive risk management advisory services help safeguard you and your loved ones against uncertainties.",
      icon: <FaShieldAlt size={40} className="text-warning" />,
    },
    {
      title: "Capital Market",
      description:
        "Tap into the dynamic world of capital markets with easy access to stocks, ETFs, and other market instruments. Empower your investments with direct equity options and grow your wealth.",
      icon: <FaBuilding size={40} className="text-info" />,
    },
    {
      title: "Portfolio Management Services (PMS)",
      description:
        "Achieve superior returns with our bespoke Portfolio Management Services (PMS). We provide personalized equity and mutual fund strategies designed to meet your financial objectives, exclusively available through us.",
      icon: <FaBriefcase size={40} className="text-danger" />,
    },
    {
      title: "Real Estate",
      description:
        "Expand your investment portfolio with premium real estate opportunities. Gain access to exclusive properties that offer long-term value and potential for capital appreciation.",
      icon: <FaHome size={40} className="text-dark" />,
    },
  ];

  return (
    <Container className="py-5 mt-5">
      <Row className="text-center mb-4">
        <Col>
          <h2 style={{ fontWeight: "700" }}>Explore Our Product Portfolio</h2>
          <p>
            Choose from a diverse range of high-quality financial products, each designed to align with your investment aspirations and risk tolerance.
          </p>
        </Col>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card className="h-100 text-center border-1">
              <Card.Body>
                <div className="mb-3">{product.icon}</div>
                <Card.Title className="mb-2" style={{ fontWeight: "600" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductBasket;
