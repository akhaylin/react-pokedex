import Pokedex, {pokeArr} from "./Pokedex.js"
/**Return random item from list */
function choice(items) {
  let hand = [];
  let tempList = [...pokeArr]
  for( let i = 0; i < Math.floor(pokeArr / 2); i++){
    let randomIndex = Math.floor(Math.random() * tempList.length);
    hand.push(tempList.splice(randomIndex, 1))
  }
  return {hand, tempList};

}

/**Removes an item from a list, if item exists return it
 * otherwise return undefined
 */
function remove(items, item) {
  const itemIndex = items.indexOf(item);
  if (itemIndex !== -1) {
    return items[itemIndex];
  }

}

export {choice, remove};

