import './CharacterDetails.css'

function CharacterDetails(){
  const array = 
    {
      id: 1,
      name: 'C-T Baladur',
      gender: 'M',
      image:
        'https://cdn.singulart.com/artworks/v2/cropped/7167/main/fhd/594333_5427bf5d0a329bde94dd4e2891712c57.jpeg',
      species: 'Alien',
      personality: 'Alcoolique',
      description:
        "Après avoir été le compagnon de C-3 PO, C-T Baladur a été abandonné aux abords de la ceinture d'orion, près de la station de kérosene dementélé ",
      location: 'Bételgeuse',
      age: '2061 ans',
    }
  

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