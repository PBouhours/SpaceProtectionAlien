function CharacterItem({ id, url }) {
  return (
    <div className='CharacterItem' id={id}>
      <img src={url.image} alt='' />
      <h2>{url.name}</h2>
      <h3>{url.description}</h3>
    </div>
  );
}
export default CharacterItem;
