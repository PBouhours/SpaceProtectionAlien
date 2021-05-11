import { useEffect, useState } from 'react';
import './CharacterDetails.css';
import firebase from './firebaseConfig';
import { Link } from 'react-router-dom';

function CharacterDetails(props) {
  const [active, setActive] = useState('');
  const [character, setCharacter] = useState({});

  const id = props.match.params.id;
  console.log(id);

  const getImageUrl = async () => {
    const imageRef = await firebase.database().ref(`images/${id}`);

    imageRef.on('value', async (snapshot) => {
      const imageUrls = await snapshot.val();
      setCharacter(imageUrls);
      console.log(imageUrls);
    });
  };
  useEffect(() => {
    getImageUrl();
  });

  return (
    <div className='CharacterDetails'>
      <h1>{character.name}</h1>
      <div className='body'>
        <div className='info'>
          <h3>espèce: {character.species}</h3>
          <h3>
            Sexe: {character.gender} age: {character.age}
          </h3>
          <h3>personnalité: {character.personality}</h3>
          <h3>localisation: {character.location} </h3>
          <h3>Description:</h3>
          <p>{character.description}</p>
        </div>
        <div className='Photo'>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
      <Link to='/'>Retour</Link>
      <button type='button' onClick={() => setActive('active')}>
        Validé l'adoption
      </button>
      <div className={`formulaire ${active}`}>
        <form className='ContactForm'>
          <input type='text' className='name' placeholder='Nom' />
          <input type='text' className='prenom' placeholder='Prénom' />
          <input type='mail' className='email' placeholder='Email' />
          <button type='button'>Je veux cette Alien </button>
        </form>
      </div>
    </div>
  );
}
export default CharacterDetails;
