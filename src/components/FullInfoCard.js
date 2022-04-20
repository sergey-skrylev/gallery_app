import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FullInfoCard = ({ id, url, title, goBack }) => {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>Card ID: {id}</Card.Title>
          <Card.Text>
            "{title}"
          </Card.Text>
          <Button variant="dark" onClick={goBack}>GO BACK</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FullInfoCard;
