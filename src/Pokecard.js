
import Col from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
const BASE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

function Pokecard({ pokemon }) {
    const { id, name, type, base_experience } = pokemon;

    const image = `${ BASE_URL }${ id }.png`;
    return (
        <Card bg={"primary"}>
            < h2 > {name}</h2 >
            <Card.Img src={image} alt={name + "image"} />
            <h3>{type}</h3>
            <p>{base_experience}</p>
        </Card >
    );
}

export default Pokecard;