import { React, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import "./DicePage.css";

export const DicePage = () => {
  const DieList = [2, 4, 6, 8, 10, 12, 20, 100];
  const [diceNum, setDiceNum] = useState(0);
  let handleDieRoll = (value) => {
    return setDiceNum(Math.floor(Math.random() * value) + 1);
  };

  const diceList = DieList.map((die, i) => (
    
    <Button
      key={i}
      variant="outline-secondary"
      value={die}
      onClick={(e) => handleDieRoll(e.target.value)}
      className="m-1"
    >
      {die}
    </Button>
    
  ));

  return (
    <Card id="DiceBox" className="container mt-3">
      <Card.Header>Dice Roll</Card.Header>
      <div id="rollDisplay">{diceNum}</div>
      <Card.Text>

        {diceList}
      </Card.Text>
     
    </Card>
  );
};
