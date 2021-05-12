import './App.css';
import Header from './components/Header';
import firebase from './components/firebaseConfig';
import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
=======
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
>>>>>>> 43fed56eb2854aded193af8fe90146c5a6315546
import CharacterDetails from './components/CharacterDetails';
import Propose from './components/Propose';

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
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <CharacterList
              getImageUrl={getImageUrl}
              all={all}
              setAll={setAll}
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
            />
          </Route>
          <Route exact path='/propose'>
            <Header />
            <Propose />
          </Route>

          <Route exact path='/characters/:id' component={CharacterDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
