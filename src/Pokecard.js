import "./Pokecard.css";
const BASE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

function Pokecard({ pokemon }) {
    const { id, name, type, base_experience } = pokemon;

    const image = `${ BASE_URL }${ id }.png`;
    return (
        <div className="Pokecard">
            <h2>{name}</h2>
            <img src={image} alt={name + "image"}></img>
            <h3>{type}</h3>
            <p>{base_experience}</p>
        </div>
    );
}

export default Pokecard;