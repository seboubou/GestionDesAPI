import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RickAndMortyDetails() {
    const [data, setData] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((rickData) => setData(rickData))
            .catch((err) => console.error(err))

    }, []);

    return (
        <ul className="home-page_ul">
            {data !== undefined &&
                <li className="rick-and-morty-card">

                    <img src={data.image} />
                    <p>My name is {data.name}</p>
                    

                </li>
            }
        </ul>
    )
}

export default RickAndMortyDetails;