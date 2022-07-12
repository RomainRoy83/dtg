import Reservation from "../components/Reservation";

const CavernDetails = (props) => {
    const {
        caverns
      } = props

  return (
    <div className="cavernDetails">
      <p>Details des Grottes</p>
      {caverns.filter(cavern => cavern.id===5).map(cavern => 
      <div className="cavernDetails">
        <img className="detailsPhoto" src={cavern.photo} alt={cavern.name}></img>
        <h1 className="cavernName">{cavern.name}</h1>
        <p>Type : {cavern.capacity}</p>
        <p>{cavern.description1}</p>
        <p className="detailsDescription">{cavern.description2}</p>
        <p>Prix : {cavern.price}</p>
     </div>    
      )
      }
      <Reservation />
    </div>
   )}

export default CavernDetails;
