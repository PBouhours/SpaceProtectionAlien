import CharacterItem from "./CharacterItem";
import data from "../data/Data"
function CharacterList(){
  console.log(data)
  return(
    <div className="CharacterList">
      <CharacterItem key={data[0].id} name={data[0].name} image={data[0].image} age={data[0].age} />
    </div>

  )
}
export default CharacterList;