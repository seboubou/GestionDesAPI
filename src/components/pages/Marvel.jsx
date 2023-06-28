import React from 'react';
import MarvelCard from './MarvelCard';
import { useEffect, useState } from "react";
import NavBarOne from "../globals/NavBarOne";
// import MenuBurger from "./MenuBurger";

const Marvel = () => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");

    useEffect(() => {
        fetch(`http://localhost:5000/api/marvel/characters/`)
            .then((response) => response.json())
            .then((marvelData) => setData(marvelData))
            .catch((err) => console.error(err))

    }, []);

    function handleChange(e) {
        setSelectedValue(e.target.value)
    }

    return (


        <main className="marvel-page">
            <NavBarOne /> 
            {/* <MenuBurger /> */}
            <di className="marvel-body">
                
                <div className='logo-marvel-bouclier'>

                    <div className='name-marvel'>
                        <img src="https://tse3.mm.bing.net/th?id=OIP.MULiQnAE5vbqRufT_oeYHgHaE8&pid=Api&P=0&h=180" />
                    </div>
                    <h1 className='title-marvel'><img src="https://tse2.mm.bing.net/th?id=OIP.jV7w31WkAXA6vm3y8bD2QwHaCh&pid=Api&P=0&h=180" /></h1>
                    <div className='bouclier-captain'>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.NFcsFx9rPaVfrXpTiK6oggHaHY&pid=Api&P=0&h=180" />
                    </div>
                </div>
            </di>

            <select className="marvel-page_select" onChange={handleChange}>
                <option>...</option>


                {data

                    .map((el) => {
                        return (
                            <option key={el.id}>{el.name}</option>
                        )
                    })


                }
            </select>


            <ul className="marvel-page_ul">



                {data
                    .filter((el) => selectedValue === "..." || selectedValue === el.name)
                    .map((el) => {
                        return (
                            <MarvelCard key={el.id} id={el.id} name={el.name} image={el.image} race={el.race} actor={el.actor} />
                        )
                    })
                }

            </ul>
        </main>
    )
};

export default Marvel;