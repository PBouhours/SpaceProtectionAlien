import './CharacterItem.css';

function CharacterItem({ name, image, age }) {
  return (
    <div className='CharacterItem'>
      <div className='info-character'>
        <h2>{name}</h2>
        <p>{age}</p>
      </div>
      <div className='img-character'>
        <img src={image} alt={name} className='img-card-list' />
      </div>
      <button type='button'>Adoptez-le !</button>
    </div>
  );
}
export default CharacterItem;
