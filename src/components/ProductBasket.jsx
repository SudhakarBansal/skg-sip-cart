import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { ChartPie, ChartNoAxesCombined, Building2, ListMinus, HandCoins, LayoutPanelTop, Umbrella } from 'lucide-react';

const ProductBasket = () => {
  return (
    <Container className="text-center py-5 mt-5 ">
      <div className='d-flex align-items-center justify-content-center flex-col'>
        <h2 style={{ fontWeight: '700' }}>PRODUCT BASKET</h2>
        <div className='mb-4' style={{ width: '10%', height: '5px', backgroundColor: '#3BA3E9' }}></div>
        <p style={{ width: '70%' }}>
          If you are looking for the right financial product, you are at the right place.
          Starting from mutual funds to insurance and from real estate to other financial
          products, we have them all. You can select your financial investment products
          as per your requirements.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center mt-4">
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <ChartPie size={64} />
            <Card.Title>MUTUAL FUNDS</Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <ChartNoAxesCombined size={64} />
            <Card.Title>CAPITAL MARKET</Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <Building2 size={64} />
            <Card.Title>REAL ESTATE</Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <ListMinus size={64} />
            <Card.Title>UNLISTED STOCKS</Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <HandCoins size={64} />
            <Card.Title>FIXED INCOME</Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <LayoutPanelTop size={64} />
            <Card.Title>PMS</Card.Title>
          </Card.Body>
        </Card>
        <Card className="m-2 mb-5" style={{ flex: '1 0 21%', minWidth: '250px' }}>
          <Card.Body>
            <Umbrella size={64} />
            <Card.Title>INSURANCE</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default ProductBasket;
