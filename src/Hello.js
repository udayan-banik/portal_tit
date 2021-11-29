import React from "react";
import { Container, Navbar, Nav, Carousel, Card } from "react-bootstrap";
import "./Hello.css";

export default function Hello() {
  return (
    <div className="hero">
      <div className="class-1">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <br />
      <div className="Center-Stage" variant="dark">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1605457867610-e990b192418e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1605457867610-e990b192418e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1605457867610-e990b192418e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
      <br />
      <div className="Card-sect">
        <Container>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.unsplash.com/photo-1605457867610-e990b192418e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyb3VzZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              height={"720px"}
              width={"720px"}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>
      </div>
      <br />
      <br />
      <div className="class-2">
        <Container>
          <Navbar bg="dark" variant="dark" position="bottom">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}
