import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectedPhotos } from '../redux/actions/actions';
import SingleCard  from '../components/SingleCard';

const PhotoItem = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const photo = useSelector((state) => state.selectedPhoto);
  const { title, url } = photo;


  const fetchPhotoItem = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .catch((err) => {
        console.error('Error', err)
      })
    dispatch(selectedPhotos(response.data))
  }

  useEffect(() => {
    fetchPhotoItem()
  }, [])

  return (
    <div>
      Uniq Photo
      {id}
      <br />
      {title}
      <SingleCard url={url}/>
    </div>
  );
};

export default PhotoItem;
