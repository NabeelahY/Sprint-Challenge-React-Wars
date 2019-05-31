import React from 'react';
import StarWarChar from './StarWarChar';

const StarWar = ({charList}) => {
    return (
        charList.map(char => {
            return <StarWarChar char={char.name} key={char.created} />
        })
    )
}

export default StarWar;