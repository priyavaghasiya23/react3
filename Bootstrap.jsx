import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

export default function Bootstrap() {
  const NavbarComponent = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="MyStore Logo"
            className="img-fluid me-2"
            style={{ height: '40px', width: '40px' }}
          />
          <h4 className="mb-0 text-dark fw-bold">MyStore</h4>
        </div>
  
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarNav">
          <input
            type="text"
            placeholder="Search products..."
            className="form-control mx-auto"
            style={{ maxWidth: '300px' }}
          />
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
  


  const CarouselComponent = () => (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpgg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>SHOP ONLINE</h3>
          <p>Best deals on electronics and accessories!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Grab your favorite gadgets at amazing prices.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

  const HeaderComponent = () => (
    <header className="bg-light text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">Enjoy a smooth shopping experience with us.</p>
        <a href="#" className="btn btn-primary btn-lg mt-3">Get Started</a>
      </div>
    </header>
  );

  const ProductsSection = () => (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg" />
              <Card.Body>
                <Card.Title>Apple Watch</Card.Title>
                <Card.Text>Track your health and fitness daily.</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/12/27/15/40/headphones-581027_1280.jpg" />
              <Card.Body>
                <Card.Title>Headphones</Card.Title>
                <Card.Text>Immersive sound quality on the go.</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/11/21/15/47/keyboard-1846880_1280.jpg" />
              <Card.Body>
                <Card.Title>Mechanical Keyboard</Card.Title>
                <Card.Text>Responsive keys for gamers and coders.</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  const ElectronicsSection = () => {
    const products = [
      {
        title: 'Laptop',
        text: 'High-performance laptop for professionals.',
        image: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_1280.jpg'
      },
      {
        title: 'Smartphone',
        text: 'Latest smartphone with cutting-edge tech.',
        image: 'https://cdn.pixabay.com/photo/2015/12/08/00/32/phone-1082643_1280.jpg'
      },
      {
        title: 'Tablet',
        text: 'Portable and powerful for work and play.',
        image: 'https://cdn.pixabay.com/photo/2017/08/06/00/08/ipad-2582333_1280.jpg'
      },
    ];

    return (
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Best Electronics</h2>
          <div className="row text-center">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.text}</Card.Text>
                    <Button variant="success">Buy Now</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />
      <HeaderComponent />
      <ProductsSection />
      <ElectronicsSection />
    </div>
  );
}
