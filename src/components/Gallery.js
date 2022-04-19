import React from 'react';
import { Card } from 'react-bootstrap';


const Gallery = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042492_01-1568x980.jpg" />
      </Card>
    </div>
  );
};

export default Gallery;
