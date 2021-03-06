import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../redux/actions/actions';
import { Link } from "react-router-dom";
import { Row, Col, Card, Spinner } from 'react-bootstrap';

const Gallery = () => {

  const dispatch = useDispatch();
  const photos = useSelector(state => state.allPhotos.photos);

  useEffect(() => {
    setTimeout(() => dispatch(getPhotos()), 500);
  }, [dispatch])

  return (
    <div style={{ margin: '40px' }}>
      {Object.keys(photos).length === 0 ? (
        <Spinner style={{ marginTop: '100px' }} animation="grow" />
      ) : (
        <Row>
          {photos.map(photo =>
            <Col key={photo.id} md={2}>
              <Link to={`/photos/${photo.id}`}>
                <div className="card-container">

                  <Card className="image" border="dark" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={photo.url} />
                  </Card>

                  <div className="middle">
                    <div className="text">OPEN</div>
                  </div>
                </div>
              </Link>
            </Col>
          )}
        </Row>
      )}
    </div>
  );
};

export default Gallery;
