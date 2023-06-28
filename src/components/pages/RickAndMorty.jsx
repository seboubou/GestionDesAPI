import { useEffect, useState } from "react";
import RickAndMortyCard from "./RickAndMortyCard";
import NavBarFive from "../globals/NavBarFive";
// import MenuBurger from "./MenuBurger"





function RickAndMorty() {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((rickData) => setData(rickData.results))
            .catch((err) => console.error(err))

    }, []);

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    return (


        <main className="rick-page">
            <NavBarFive />
           
            <select className="rick-page_select" onChange={handleChange}>
                <option>...</option>


                {data

                    .map((el) => {
                        return (
                            <option key={el.id}>{el.name}</option>
                        )
                    })


                }
            </select>


            <ul className="rick-page_ul">



                {data
                    .filter((el) => selectedValue === "..." || selectedValue === el.name)
                    .map((el) => {
                        return (
                            <RickAndMortyCard key={el.id} id={el.id} name={el.name} image={el.image} />
                        )
                    })
                }

            </ul>
        </main>
    )
}

export default RickAndMorty;