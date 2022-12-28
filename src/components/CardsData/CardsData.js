import React from "react";
import Card from "react-bootstrap/Card";
const CardsData = (props) => {
  return (
    <>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>{props.id}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.comapny}
          </Card.Subtitle>
          <Card.Text>{props.experiance}</Card.Text>
          <Card.Text>{props.salary}</Card.Text>
          <Card.Text>{props.location}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsData;
