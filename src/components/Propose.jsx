import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Resizer from 'react-image-file-resizer';
import firebase from './firebaseConfig';
import './Propose.css';
function Propose() {
  const [imageUrl, setImageUrl] = useState([]);
  const [text, setText] = useState('');
  const [src, setSrc] = useState('image');
  const [name, setName] = useState('name');
  const [age, setAge] = useState('age');
  const [des, setDes] = useState('description');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('msg');
  const [time, setTime] = useState('time');
  const [commentary, setCommentary] = useState('');
  const [nameComment, setNameComment] = useState('');

  const id = uuid();

  const readImages = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const date1 = new Date();

    const resizeFile = (file) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          300,
          300,
          'JPEG',
          100,
          0,
          (uri) => {
            resolve(uri);
          },
          'file'
        );
      });

    // eslint-disable-next-line no-new
    const image = await resizeFile(file);

    const storageRef = firebase.storage().ref().child(id);
    const imageRef = firebase.database().ref('annonce').child(id);
    await storageRef.put(image);
    storageRef.getDownloadURL().then((url) => {
      imageRef.child(src).set(url);
      imageRef.child(name).set(text);
      imageRef.child(age).set(msg);
      imageRef.child(des).set(description);
      imageRef.child(time).set(date1);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });
  };
  const getImageUrl = async () => {
    const imageRef = await firebase.database().ref('annonce');

    imageRef.on('value', async (snapshot) => {
      const imageUrls = await snapshot.val();
      const urls = [];
      for (const id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }

      setImageUrl(urls);
      console.log(imageUrl);
    });
  };
  useEffect(() => {
    getImageUrl();
  }, []);

  const myChangeHandler = (event) => {
    setText(event.target.value);
    console.log(text);
  };
  const myChangeHandlerAge = (event) => {
    setMsg(event.target.value);
    console.log(msg);
  };
  const myChangeHandlerDescription = (event) => {
    setDescription(event.target.value);
    console.log(commentary);
  };

  return (
    <div>
      <form className='boxGallery'>
        <h2 className='textHead'>Postez votre annonce</h2>

        <div className='form-gallery'>
          <div className='form-gallery-content'>
            <h2 className='title-gallery'>Photo de votre trouvaille : </h2>
            <input
              className='gallery-input'
              type='text'
              placeholder='Nom'
              onChange={myChangeHandler}
            />

            <input
              className='gallery-input'
              type='text'
              placeholder='Age'
              onChange={myChangeHandlerAge}
            />
            <input
              className='gallery-input'
              type='text'
              placeholder='Description'
              onChange={myChangeHandlerDescription}
            />

            <div>
              <input
                name='files'
                className='gallery-input-btn'
                type='file'
                accept='image/*'
                onChange={readImages}
              />
              <button type='submit' className='buttonSend'>
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Propose;
