import React from 'react';
import StarWarChar from './StarWarChar';

const StarWar = ({charList}) => {
    return (
        charList.map(char => {
            return <StarWarChar key={char.created}
            name={char.name} 
            birth={char.birth_year}
            gender={ char.gender}
            height={char.height}
            skin={char.skin_color}  />
        })
    )
}

export default StarWar;