import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import d20 from "../../assets/images/red_d20.png"

const Nav = () => {
  return (
    <>
  
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="D20"
              src={d20}
              width="40"
              height="40"
              className="d-inline-block align-middle"
            />{" "}
            DnD Handbook
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
