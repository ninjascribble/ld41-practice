import Actor from './Actor';
import Commands from '../Commands';
import Behaviors from '../Behaviors';

module.exports = {
  knight: function knight (name) {
    let result = new Actor(name, {
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
    result.behavior = Behaviors.knightly(result);
    return result;
  },

  wizard: function wizard (name) {
    let result = new Actor(name, {
      hp: 7,
      sp: 3,
      str: 5,
      con: 6,
      dex: 12,
      int: 16,
      wis: 12,
      cha: 9
    });
    result.commands.push(Commands.magicMissile());
    result.commands.push(Commands.fight());
    result.behavior = Behaviors.wizardly(result);
    return result;
  }
};
