import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe Place for your Notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <button size="lg" className="landingbutton">
                  Login
                </button>
              </a>
              <a href="/register">
                <button
                  size="lg"
                  className="landingbutton"
                  varient="outline-primary"
                >
                  SignUp
                </button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage
