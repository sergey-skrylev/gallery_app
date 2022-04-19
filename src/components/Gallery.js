import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPhotos } from '../redux/actions/actions';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Card, Spinner } from 'react-bootstrap';

const Gallery = () => {

  const dispatch = useDispatch();
  const photos = useSelector(state => state.allPhotos.photos);

  const fetchPhotos = async () => {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24')
      .catch((err) => {
        console.log('error', err);
      })
    dispatch(setPhotos(response.data));
  }

  useEffect(() => {
    setTimeout(() => fetchPhotos(), 2000);
  }, [])

  return (
    <div>
      {Object.keys(photos).length === 0 ? (
        <Spinner style={{ marginTop: '100px' }} animation="grow" />
      ) : (
        <Row>
          {photos.map(photo =>
            <Col md={2}>
              <Link to={`/photos/${photo.id}`}>
                <Card border="dark" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={photo.url} />
                </Card>
              </Link>
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default Gallery;
