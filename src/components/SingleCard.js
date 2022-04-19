import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCard = ({ url }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={url} />
    </Card>
  );
};

export default SingleCard;
