import './CharacterItem.css';
import{ Link } from "react-router-dom";

function CharacterItem({url, id}) {
  

  return (
    <div className='CharacterItem' id={id}>
      <div className='info-character'>
        <h2>{url.name}</h2>
        <p>age: {url.age}</p>
      </div>
      <div className='img-character'>
        <img src={url.image} alt={url.name} className='img-card-list' />
      </div>
      <Link to={`/characters/${id}`}><button type='button'>Adoptez-le !</button></Link>
    </div>
  );
}
export default CharacterItem;
