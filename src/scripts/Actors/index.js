import Actor from './Actor';
import Commands from '../Commands';
import Behaviors from '../Behaviors';

module.exports = {
  knight: function knight (name) {
    let actor = new Actor(name, {
      hp: 10,
      sp: 0,
      str: 11,
      con: 13,
      dex: 9,
      int: 8,
      wis: 8,
      cha: 11
    });
    actor.behavior = Behaviors.knightly(actor);
    actor.behavior.commands.push(Commands.fight());
    return actor;
  },

  wizard: function wizard (name) {
    let actor = new Actor(name, {
      hp: 7,
      sp: 3,
      str: 5,
      con: 6,
      dex: 12,
      int: 16,
      wis: 12,
      cha: 9
    });
    actor.behavior = Behaviors.wizardly(actor);
    actor.behavior.commands.push(Commands.heal());
    actor.behavior.commands.push(Commands.magicMissile());
    actor.behavior.commands.push(Commands.fight());
    return actor;
  }
};
