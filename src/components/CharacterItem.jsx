function CharacterItem({name, image, age}){
  return(
    <div className="CharacterItem">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  )
}
export default CharacterItem;