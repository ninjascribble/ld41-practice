import Character from './Character';
import Commands from '../Commands';

module.exports = {
  knight: function knight (name) {
    let result = new Character(name, {
      hp: 10,
      sp: 0,
      str: 11,
      con: 13,
      dex: 9,
      int: 8,
      wis: 8,
      cha: 11
    });
    result.commands.push(Commands.fight());
    return result;
  },

  wizard: function wizard (name) {
    let result = new Character(name, {
      hp: 7,
      sp: 3,
      str: 5,
      con: 8,
      dex: 12,
      int: 16,
      wis: 10,
      cha: 9
    });
    result.commands.push(Commands.magicMissile());
    result.commands.push(Commands.fight());
    return result;
  }
}
