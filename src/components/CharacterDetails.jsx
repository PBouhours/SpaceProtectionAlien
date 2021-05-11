import './CharacterDetails.css'

function CharacterDetails(){
  
  

  return(
    <div className="CharacterDetails">
      <h1>{array.name}</h1>
      <div className="body">
        <div className="info">
          <h3>espèce: {array.species}</h3>
          <h3>Sexe: {array.gender} age: {array.age}</h3>
          <h3>personnalité: {array.personality}</h3>
          <h3>localisation: {array.location} </h3>
          <h3>Description:</h3>
          <p>{array.description}</p>
        </div>
        <div className="Photo">
          <img src={array.image} alt={array.name} />
        </div>
      </div>      
    </div>
  )
}
export default CharacterDetails;