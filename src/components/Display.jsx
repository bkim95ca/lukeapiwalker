import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const Display = (props) => {

    const [starWars, setStarWars] = useState("")
  
    const { swId } = useParams();
    const { swItem } = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${swItem}/${swId}`)
            .then((apiResponse) => {
                console.log(apiResponse.data);
                setStarWars(apiResponse.data);
            })
            .catch(err => console.log("❌", err))
    }, [swItem, swId])
    console.log(swItem, swId)
    console.log(starWars.name)

    return (
    <>
    <h3>{swItem} id is {swId}</h3>
    {
        starWars.height ? (
            <div>
                {/* <p>{JSON.stringify(starWars)}</p> */}
                <h2>{starWars.name}</h2>
                <p><b>Height: </b>{starWars.height}</p>
                <p><b>Mass: </b>{starWars.mass}</p>
                <p><b>Hair Color: </b>{starWars.hair_color}</p>
                <p><b>Skin Color: </b>{starWars.skin_color}</p>
               
            </div>
        ) : 
        <div>
            <h2>{starWars.name}</h2>
            <p><b>Climate: </b>{starWars.climate}</p>
            <p><b>Terrain: </b>{starWars.terrain}</p>
            <p><b>Surface Water: </b>{starWars.surface_water === 1 ? 'false' : 'true'}</p>
                <p><b>Population: </b>{starWars.population}</p>
        </div>
    }
    </>
  )
}

export default Display