import React from "react";
import logo from "../../assets/images/red_d20.png";
import Button from "../../components/Button/Button";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div className="Landing">
      <header className="Landing-header">
        <img src={ logo } className="Landing-logo" alt="logo" />
        <p>Adventure awaits!</p>

        <Button 
            text="Roll for initiative" 
            bootstrapClass= "btn btn-outline-secondary" 
        />
        
      </header>
    </div>
  );
};
