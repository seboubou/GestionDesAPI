
function HarryPotterCards({ name, image, dateOfBirth, yearOfBirth, house, ancestry, actor }) {


  return (
    <div className="harry-card" 

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
    </div>
  
  );
}

export default HarryPotterCards;