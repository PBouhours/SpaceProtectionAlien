import CharacterItem from './CharacterItem';
import './CharacterList.css';

function CharacterList() {
  const array = [
    {
      id: 1,
      name: 'C-T Baladur',
      gender: 'M',
      image:
        'https://cdn.singulart.com/artworks/v2/cropped/7167/main/fhd/594333_5427bf5d0a329bde94dd4e2891712c57.jpeg',
      species: 'Alien',
      personality: '',
      description:
        "Après avoir été le compagnon de C-3 PO, C-T Baladur a été abandonné aux abords de la ceinture d'orion, près de la station de kérosene dementélé ",
      location: 'Bételgeuse',
      age: '2061 ans',
    },
    {
      id: 2,
      name: 'Massat aka Le pilon ',
      gender: 'M',
      image:
        'https://cdn.singulart.com/artworks/v2/cropped/7167/main/fhd/594333_5427bf5d0a329bde94dd4e2891712c57.jpeg',
      species: 'Alien',
      personality: '',
      description:
        "Massat est un de nos rare compagnon a ne pas avoir été abandonné, en sortie de soiréé, il s'est perdu en sorant de Kepler-1649 b ",
      location: 'Kepler-1649 b sortie WD40',
      age: '+/- 12 ans',
    },
  ];
  return (
    <div className='CharacterList'>
      <CharacterItem
        key={array[0].id}
        image={array[0].image}
        name={array[0].name}
        age={array[0].age}
      />
      <CharacterItem
        key={array[1].id}
        image={array[1].image}
        name={array[1].name}
        age={array[1].age}
      />
      <CharacterItem
        key={array[0].id}
        image={array[0].image}
        name={array[0].name}
        age={array[0].age}
      />

      <CharacterItem
        key={array[0].id}
        image={array[0].image}
        name={array[0].name}
        age={array[0].age}
      />
      <CharacterItem
        key={array[1].id}
        image={array[1].image}
        name={array[1].name}
        age={array[1].age}
      />
      <CharacterItem
        key={array[0].id}
        image={array[0].image}
        name={array[0].name}
        age={array[0].age}
      />
    </div>
  );
}
export default CharacterList;
