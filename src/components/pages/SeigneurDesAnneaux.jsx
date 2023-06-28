import React from 'react';
import { useEffect, useState } from "react";
import SeigneurDesAnneauxCards from './SeigneurDesAnneauxCards';
import NavBarTwo from "../globals/NavBarTwo";
// import MenuBurger from "./MenuBurger"

const SeigneurDesAnneaux = () => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");

    useEffect(() => {
        fetch("http://localhost:5000/api/sda")
            .then((response) => response.json())
            .then((sdaData) => setData(sdaData))
            .catch((err) => console.error(err))

    }, []);

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    return (
        <main className="sda-page">
            <NavBarTwo />
            {/* <MenuBurger /> */}
            <h1 className='title-sda'> Le seigneur des anneaux</h1>
            <select className="sda-page_select" onChange={handleChange}>
                <option>...</option>


                {data

                    .map((el) => {
                        return (
                            <option key={el.id}>{el.name}</option>
                        )
                    })


                }
            </select>


            <ul className="sda-page_ul">



                {data
                    .filter((el) => selectedValue === "..." || selectedValue === el.name)
                    .map((el) => {
                        return (
                            <SeigneurDesAnneauxCards key={el.id} id={el.id} name={el.name} image={el.image} race={el.race} />
                        )
                    })
                }

            </ul>
        </main>
    );
};

export default SeigneurDesAnneaux;