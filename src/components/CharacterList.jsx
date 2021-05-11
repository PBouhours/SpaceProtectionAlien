import CharacterItem from './CharacterItem';
import React, { useEffect } from 'react';

import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import Dropdown2 from './Dropdown2';
import DropdownItem2 from './DropdownItem2';
import './CharacterList.css';

export default function CharacterList({
  imageUrl,
  setImageUrl,
  getImageUrl,
  all,
  setAll,
}) {
  useEffect(() => {
    getImageUrl();
    setAll(imageUrl);
    console.log(imageUrl);
    console.log(all);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allAlien = imageUrl.filter((valeur) => valeur.url);
  const filteredSexeHomme = imageUrl.filter(
    (valeur) => valeur.url.gender === 'M'
  );
  const filteredSexeFemme = imageUrl.filter(
    (valeur) => valeur.url.gender === 'F'
  );
  const filteredSexeAutre = imageUrl.filter(
    (valeur) => valeur.url.gender === 'Autre'
  );
  const filteredAlien = imageUrl.filter(
    (valeur) => valeur.url.species === 'Alien'
  );
  const filteredPredator = imageUrl.filter(
    (valeur) => valeur.url.species === 'Predator'
  );
  const filteredHumanoide = imageUrl.filter(
    (valeur) => valeur.url.species === 'Humanoide'
  );
  const showAll = () => {
    setAll(allAlien);
  };
  const showHomme = () => {
    setAll(filteredSexeHomme);
  };
  const showFemme = () => {
    setAll(filteredSexeFemme);
  };
  const showAutre = () => {
    setAll(filteredSexeAutre);
  };
  const showAlien = () => {
    setAll(filteredAlien);
  };
  const showPredator = () => {
    setAll(filteredPredator);
  };
  const showHumanoide = () => {
    setAll(filteredHumanoide);
  };

  return (
    <>
      <h3 className='title-list'>
        Découvrez nos spécimens prêts à l'adoption, à vous de choisir !
      </h3>
      <div className='boxDropDown'>
        <div className='drop-group'>
          <div className='btn-drop'>
            <button type='button' onClick={(e) => showAll()}>
              All
            </button>
          </div>
          <div className='drop-container'>
            <Dropdown>
              <DropdownItem onClick={(e) => showFemme()}>Femme</DropdownItem>
              <DropdownItem onClick={(e) => showHomme()}>Homme</DropdownItem>
              <DropdownItem onClick={(e) => showAutre()}>Autre</DropdownItem>
            </Dropdown>
            <Dropdown2>
              <DropdownItem2 onClick={(e) => showAlien()}>Alien</DropdownItem2>
              <DropdownItem2 onClick={(e) => showHumanoide()}>
                Humanoide
              </DropdownItem2>
              <DropdownItem2 onClick={(e) => showPredator()}>
                Predator
              </DropdownItem2>
            </Dropdown2>
          </div>
        </div>
      </div>
      <div className='CharacterList'>
        {all && all.map(({ id, url }) => <CharacterItem url={url} id={id} />)}
      </div>
    </>
  );
}
