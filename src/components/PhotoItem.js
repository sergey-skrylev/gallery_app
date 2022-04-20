import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { getSelectedPhotoSuccess } from '../redux/actions/actions';
import { Spinner } from 'react-bootstrap';
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
    dispatch(getSelectedPhotoSuccess(response.data))
  }

  useEffect(() => {
    setTimeout(() => fetchPhotoItem(), 1500);
  }, [])

  // для саги

  // useEffect(() => {
  //   setTimeout(() => dispatch(getSelectedPhoto()), 300);
  // }, [dispatch])

  return (
    <div>
      {Object.keys(photo).length === 0 ? (
        <Spinner style={{ marginTop: '100px' }} animation="grow" />
      ) : (
        <FullInfoCard
          id={id}
          url={url}
          goBack={goBack}
          title={title} />
      )}
    </div>
  );
};

export default PhotoItem;
