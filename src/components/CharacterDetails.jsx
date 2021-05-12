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
  }, []);

  return (
    <div className='CharacterDetails'>
      <h2 className='title-card'>{character.name}</h2>
      <div className='body'>
        <div className='info'>
          <div className='content-info'>
            <h3>Espèce :</h3>
            <p>{character.species}</p>
          </div>
          <div className='content-info'>
            <h3>Sexe :</h3>
            <p>{character.gender}</p>
          </div>
          <div className='content-info'>
            <h3>Age :</h3>
            <p>{character.age}</p>
          </div>
          <div className='content-info1'>
            <h3>Personnalité :</h3>
            <p>{character.personality}</p>
          </div>
          <div className='content-info1'>
            <h3>Localisation :</h3>
            <p>{character.location}</p>
          </div>
          <div className='content-info1'>
            <h3>Description:</h3>
            <p>{character.description}</p>
          </div>
        </div>
        <div className='Photo'>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
      <div className='link-btn'>
        <Link to='/'>Retour</Link>
        <button type='button' onClick={() => setActive('active')}>
          Valider l'adoption
        </button>
      </div>
      <div className={`formulaire ${active}`}>
        <form className='ContactForm'>
          <input type='text' className='name' placeholder='Nom' />
          <input type='text' className='prenom' placeholder='Prénom' />
          <input type='mail' className='email' placeholder='Email' />
            <div className='btn'>
            <button className='retour' type='button'onClick={()=> setActive('')}>retour</button>
            <button className='valide' type='button'>Je veux cet Alien </button>
            </div>
        </form>
      </div>
    </div>
  );
}
export default CharacterDetails;
