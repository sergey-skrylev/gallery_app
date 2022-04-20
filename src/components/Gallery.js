import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../redux/actions/actions';
import { Link } from "react-router-dom";
import { Row, Col, Card, Spinner } from 'react-bootstrap';

const Gallery = () => {

  const dispatch = useDispatch();
  const photos = useSelector(state => state.allPhotos.photos);

  useEffect(() => {
    setTimeout(() => dispatch(getPhotos()), 1000);
  }, [dispatch])

  return (
    <div>
      {Object.keys(photos).length === 0 ? (
        <Spinner style={{ marginTop: '100px' }} animation="grow" />
      ) : (
        <Row>
          {photos.map(photo =>
            <Col key={photo.id} md={2}>
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
