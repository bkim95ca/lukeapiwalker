import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = (props) => {

    const [starWarsId, setStarWarsId] = useState(1);
    const [starWarsItem, setStarWarsItem] = useState("");
    const [starWarsList, setStarWarsList] = useState([]);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(starWarsId, starWarsItem)
        navigate(`/${starWarsItem}/${starWarsId}`)
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/`)
            .then((apiResponse) => {
                console.log(apiResponse.data);
                setStarWarsList(apiResponse.data)
            })
            .catch(err => console.log("❌", err))
    }, [])

  return (
    <div>
        <form onSubmit={submitHandler}>
    <select onChange={e => setStarWarsItem(e.target.value)}>
        { 
            Object.keys(starWarsList).map((oneItem, index) => {
            return (
                <option key={index} value={oneItem}>{oneItem}</option>
        )})
        }
    </select>
    <input type="number" onChange={e => setStarWarsId(e.target.value) } value={starWarsId}/>
    <button>Submit</button>
</form>
</div>
  )
}

export default Form