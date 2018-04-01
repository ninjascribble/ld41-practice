import Character from './Character';
import Commands from '../Commands';

module.exports = {
  knight: function knight (name) {
    let result = new Character(name, {
      hp: 200,
      sp: 38
    });
    result.commands.push(Commands.fight());
    return result;
  },

  wizard: function wizard (name) {
    let result = new Character(name, {
      hp: 200,
      sp: 153
    });
    result.commands.push(Commands.fight());
    return result;
  }
}
