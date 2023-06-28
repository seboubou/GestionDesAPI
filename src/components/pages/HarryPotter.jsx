
import { useEffect, useState } from "react";
import HarryPotterCards from "./HarryPotterCards";
import NavBarTrois from "../globals/NavBarTrois";
// import MenuBurger from "./MenuBurger"




function HarryPotter() {
  const [data, setData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("...");

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((HarryData) => setData(HarryData))
      .catch((err) => console.error(err))

  }, []);

  function handleChange(e) {
    setSelectedValue(e.target.value)
  }

  const limitedData = data.slice(0, 21);

  return (
    <main className="harry-page">
      <NavBarTrois />
       {/* <MenuBurger /> */}
      <div className='choipeaux'>
        <img src="https://tse3.mm.bing.net/th?id=OIP.DNcBoNMHB_Xz4nGaJfYPyAHaGC&pid=Api&P=0&h=180 " />
      </div>
      <h1 className="title-harry">Harry Potter</h1>
      <select className="harry-page_select" onChange={handleChange}>
        <option>...</option>


        {data

          .map((el) => {
            return (
              <option key={el.id}>{el.name}</option>
            )
          })


        }
      </select>


      <ul className="harry-page_ul">
        {limitedData
          .filter(
            (el) => selectedValue === "..." || selectedValue === el.name
          )
          .map((el) => {
            return (
              <HarryPotterCards
                key={el.id}
                id={el.id}
                name={el.name}
                image={el.image}
                yearOfBirth={el.yearOfBirth}
                dateOfBirth={el.dateOfBirth}
                house={el.house}
                ancestry={el.ancestry}
                // hogwartsStudent={el.hogwartsStudent}
                // alternate_actors={el.alternate_actors}
                actor={el.actor}
              />
            );
          })}
      </ul>
    </main>
  );
}

export default HarryPotter;