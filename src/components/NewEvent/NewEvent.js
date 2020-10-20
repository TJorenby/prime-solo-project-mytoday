import React, { Fragment, useState } from 'react';
import Camera3 from '../Camera3/Camera3';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Link } from 'react-router-dom';
import moment from 'moment';


//Styling Imports
import './NewEvent.scss';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';
import { FaCamera, FaImage, FaStar } from 'react-icons/fa';
import NewEventForm from '../NewEventForm/NewEventForm';




const NewEvent = (props) => {
  const [file, setFile] = useState('');
  const [camImage, setCamImage] = useState('');
  const [camOn, setCamOn] = useState(true);
  const [selectImage, setSelectImage] = useState('');


  // console.log('file:', file);
  console.log('camImage:', camImage);

  const onChange = e => {
    setFile(e.target.files[0]);
    imageHandler(e.target.files[0]);
    setCamOn(false);

  };


  const toggleImageView = (e) => {
    camOn ? setCamOn(false) : setCamOn(true);
    setCamImage('');
    setFile('');


  }

  const imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setSelectImage(reader.result);
        setCamImage('');
      }
    }

    reader.readAsDataURL(e);
  }




  return (
    <div className="neweventform">
      <div className="newevent">
        <p>STEP 1</p>
        <p>{moment().format('LT')}</p>
      </div>

      <div className="neweventform__imageView">
        {
          camOn ? (

            <div>
              <Camera3
                className="neweventform__camera"
                setCamImage={setCamImage}
                setCamOn={setCamOn}

              >
              </Camera3>
            </div>


          ) : (
              <div>
                {camImage ? (
                  <img src={camImage} alt="" />
                ) : (<img src={selectImage} alt="" />)
                }

              </div>



            )}



      </div>
      <div>

      </div>
      <div>


      </div>


      <div className="neweventform__imgButtonContainer">
        <>
          <label htmlFor="fileUpload">
            <FaImage size="7%" />
          </label>
          <input
            type='file'
            className="neweventform__imageInput"
            id='fileUpload'
            onChange={onChange}
          />
        </>

        <button
          className="btn-styles"
          onClick={() => toggleImageView()}>
          <FaCamera size="10%" />
        </button>
      </div>

      <div>
        {
          file || camImage ? (
            <NewEventForm
              camImage={camImage}
              file={file}

            />
          ) : (null)

        }
      </div>




    </div>
  );
};

export default connect(mapStoreToProps)(NewEvent);
