import React from "react";
import logo from "../../assets/images/numberRed_d20.png";
import Button from 'react-bootstrap/Button';
import "./LandingPage.css";


export const LandingPage = ({roll}) => {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src={ logo } className="Landing-logo" alt="logo" />
        <p>Adventure awaits!</p>

        <Button variant="outline-secondary" onClick={roll}>Roll for initiative</Button>

      </header>
    </div>
  );
};
