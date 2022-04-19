import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setPhotos } from '../redux/actions/actions'

const Gallery = () => {

  const photos = useSelector(state => state)
  const dispatch = useDispatch()

  const fetchPhotos = async () => {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24')
      .catch((err) => {
        console.log('error', err);
      })
    dispatch(setPhotos(response.data));
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  console.log(photos);

  return (
    <div>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042492_01-1568x980.jpg" />
      </Card>
    </div>
  );
};

export default Gallery;
