import Pokedex, { pokeArr } from "./Pokedex.js";
import Container from 'react-bootstrap/Container';

function choice() {
  let hand1 = [];
  let hand2 = [...pokeArr];
  for (let i = 0; i < Math.floor(pokeArr.length / 2); i++) {
    let randomIndex = Math.floor(Math.random() * hand2.length);
    hand1.push(hand2.splice(randomIndex, 1)[0]);
  }
  console.log("hand1", hand1);
  console.log("hand2", hand2);
  return { hand1, hand2 };

}

function Pokegame() {
  const { hand1, hand2 } = choice();
  const hand1Exp = hand1.reduce((x, p) => p.base_experience + x, 0);
  const hand2Exp = hand2.reduce((x, p) => p.base_experience + x, 0);
  const hand1Winner = hand1Exp > hand2Exp;
  return (
    <Container>
      <Pokedex pokemon={hand1} className="hand1" isWinner={hand1Winner} />
      <Pokedex pokemon={hand2} className="hand2" isWinner={!hand1Winner} />
    </Container>
  );
}

export default Pokegame;