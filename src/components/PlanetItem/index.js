// Write your code here
/* eslint-disable prettier/prettier */

const PlanetItem=(props)=>{
const {details}=props
const {name,imageUrl,description}=details

return(
    <div>
        <h1>Planets</h1>
        <img src={imageUrl} alt={`planet ${name}`}/>
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
)
}

export default PlanetItem