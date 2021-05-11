import './CharacterItem.css';

function CharacterItem({ id, url }) {
  return (
    <div className='CharacterItem' id={id}>
      <div className='info-character'>
        <h2>{url.name}</h2>
        <p>{url.description}</p>
      </div>
      <div className='img-character'>
        <img src={url.image} alt={url.name} className='img-card-list' />
      </div>
      <button type='button'>Adoptez-le !</button>
    </div>
  );
}
export default CharacterItem;
