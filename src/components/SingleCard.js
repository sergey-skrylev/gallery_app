import React from 'react';
import { Card } from 'react-bootstrap';

const SingleCard = ({ url }) => {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
      </Card>
    </div>
  );
};

export default SingleCard;
