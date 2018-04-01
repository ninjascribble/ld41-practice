import CharacterCard from './CharacterCard';
import Character from '../models/Character';

module.exports = {
  load: function load (loader) {
  },

  characterCard: function characterCard (game, x, y, character) {
    return new CharacterCard(game, x, y, character);
  },

  knight: function knight (game, x, y) {
    const character = new Character('Knight', { hp: 1027, sp: 38 });
    return this.characterCard(game, x, y, character);
  },

  wizard: function wizard (game, x, y) {
    const character = new Character('Wizard', { hp: 841, sp: 153 });
    return this.characterCard(game, x, y, character);
  }
};
