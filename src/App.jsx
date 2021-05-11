import './App.css';
import Header from './components/Header';
import firebase from './components/firebaseConfig';
import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';

function App() {
  const [imageUrl, setImageUrl] = useState([]);
  const [all, setAll] = useState();
  const getImageUrl = async () => {
    const imageRef = await firebase.database().ref('images');

    imageRef.on('value', async (snapshot) => {
      const imageUrls = await snapshot.val();
      const urls = [];
      for (const id in imageUrls) {
        urls.push({ id, url: imageUrls[id] });
      }

      setImageUrl(urls);
      setAll(urls);
      console.log(imageUrl);
    });
  };
  useEffect(() => {
    getImageUrl();
    setAll(imageUrl);
    console.log(imageUrl);
  }, []);
  return (
    <div className='App'>
      <Header />
      <CharacterList
        getImageUrl={getImageUrl}
        all={all}
        setAll={setAll}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
      />
    </div>
  );
}

export default App;
