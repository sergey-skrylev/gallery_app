import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setPhotos } from '../redux/actions/actions'
import { Link } from "react-router-dom";

const Gallery = () => {

  const photos = useSelector(state => state.photos.photos)
  const dispatch = useDispatch()

  const renderPhotos = photos.map(photo => {
    const { id, url } = photo;
    return (
      <div>
        <Link to={`/photo/${id}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
          </Card>
        </Link>
      </div>
    )
  })

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
      {renderPhotos}
    </div>
  );
};

export default Gallery;
