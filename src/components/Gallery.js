import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPhotos } from '../redux/actions/actions';
import { Link } from "react-router-dom";
import axios from 'axios';
import SingleCard from '../components/SingleCard';

const Gallery = () => {

  const photos = useSelector(state => state.allPhotos.photos);
  const dispatch = useDispatch();

  const renderPhotos = photos.map(photo => {
    const { id, url } = photo;
    return (
      <div>
        <Link to={`/photos/${id}`}>
          <SingleCard url={url} />
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

  // console.log(photos);

  return (
    <div>
      {renderPhotos}
    </div>
  );
};

export default Gallery;
