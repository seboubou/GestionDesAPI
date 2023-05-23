
function HarryPotterCards({ name, image, id, dateOfBirth, yearOfBirth, house, ancestry, actor }) {


  return (
    <li className="harry-card" 
     
    >
      <div className="card-front">
        
          <img src={image} alt={name} />
          <p>{name}</p>
       
      </div>
      <div className="card-back">
        <p> {yearOfBirth}</p>
        <p> {house}</p>
        <p> {dateOfBirth}</p>
        <p>{ancestry}</p>
        <p>{actor}</p>
       
      </div>
    </li>
  );
}

export default HarryPotterCards;