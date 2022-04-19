import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectedPhotos } from '../redux/actions/actions';
import { Button } from 'react-bootstrap';
// import SingleCard from '../components/SingleCard';
import FullInfoCard from '../components/FullInfoCard';


const PhotoItem = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector((state) => state.selectedPhoto);
  const { title, url } = photo;

  const goBack = () => { // go back button
    navigate(-1)
  }

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
      <FullInfoCard
        id={id}
        url={url}
        goBack={goBack}
        title={title} />
    </div>
  );
};

export default PhotoItem;
