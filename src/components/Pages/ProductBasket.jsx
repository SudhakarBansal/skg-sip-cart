import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaChartPie, FaBriefcase, FaDollarSign, FaBalanceScale, FaChartLine, FaUniversity } from 'react-icons/fa';

const ProductBasket = () => {
  const products = [
    {
      title: 'Mutual Funds',
      description:
        'Professionally managed investment funds pooling money from investors to purchase securities. These provide diversification, liquidity, and professional management.',
      icon: <FaChartPie size={40} className="text-primary" />,
    },
    {
      title: 'Equity Funds',
      description:
        'Collective investment schemes focusing on investments in various equity securities using private equity strategies.',
      icon: <FaBriefcase size={40} className="text-success" />,
    },
    {
      title: 'Debt Funds',
      description:
        'Investment pools focusing on fixed-income investments like bonds, offering consistent returns with lower risk.',
      icon: <FaDollarSign size={40} className="text-warning" />,
    },
    {
      title: 'Balanced Funds',
      description:
        'Mutual funds containing a mix of stocks, bonds, and sometimes money market instruments to balance risk and return.',
      icon: <FaBalanceScale size={40} className="text-info" />,
    },
    {
      title: 'Small Cap Funds',
      description:
        'Investments in small-cap category stocks, excluding the largest 250 stocks, providing high-growth potential.',
      icon: <FaChartLine size={40} className="text-danger" />,
    },
    {
      title: 'Large Cap Funds',
      description:
        'Investments in the largest 100 stocks by market capitalization, offering stability and consistent returns.',
      icon: <FaUniversity size={40} className="text-dark" />,
    },
  ];

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f6f6f6' }}>
      <Row className="text-center mb-4">
        <Col>
          <h2 style={{ fontWeight: '700' }}>Our Product Basket</h2>
          <p>
            Explore a variety of financial products designed to cater to your
            diverse investment needs and goals.
          </p>
        </Col>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
            <Card className="h-100 text-center border-0 shadow">
              <Card.Body>
                <div className="mb-3">{product.icon}</div>
                <Card.Title className="mb-2" style={{ fontWeight: '600' }}>
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
