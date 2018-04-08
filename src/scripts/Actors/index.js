import Actor from './Actor';
import Commands from '../Commands';
import Behaviors from '../Behaviors';

module.exports = {
  knight: function knight (name) {
    let actor = new Actor(name, {
      hp: 10,
      sp: 3,
      str: 11,
      con: 13,
      dex: 9,
      int: 8,
      wis: 7
    });
    actor.behavior.commands.push(Commands.heal());
    actor.behavior.commands.push(Commands.fight());
    actor.behavior.behaviors.push(Behaviors.healSelf);
    actor.behavior.behaviors.push(Behaviors.attackEnemies);
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
      wis: 12
    });
    actor.behavior.commands.push(Commands.magicMissile());
    actor.behavior.commands.push(Commands.fight());
    actor.behavior.behaviors.push(Behaviors.attackEnemies);
    return actor;
  },

  palladin: function palladin (name) {
    let actor = new Actor(name, {
      hp: 10,
      sp: 3,
      str: 10,
      con: 13,
      dex: 9,
      int: 8,
      wis: 8
    });
    actor.behavior.commands.push(Commands.heal());
    actor.behavior.commands.push(Commands.fight());
    actor.behavior.behaviors.push(Behaviors.healAllies);
    actor.behavior.behaviors.push(Behaviors.healSelf);
    actor.behavior.behaviors.push(Behaviors.attackEnemies);
    return actor;
  },

  cleric: function cleric (name) {
    let actor = new Actor(name, {
      hp: 9,
      sp: 6,
      str: 7,
      con: 8,
      dex: 9,
      int: 11,
      wis: 13
    });
    actor.behavior.commands.push(Commands.heal());
    actor.behavior.commands.push(Commands.fight());
    actor.behavior.behaviors.push(Behaviors.healSelf);
    actor.behavior.behaviors.push(Behaviors.healAllies);
    actor.behavior.behaviors.push(Behaviors.attackEnemies);
    return actor;
  },

  barbarian: function barbarian (name) {
    let actor = new Actor(name, {
      hp: 9,
      sp: 0,
      str: 15,
      con: 8,
      dex: 11,
      int: 8,
      wis: 8
    });
    actor.behavior.commands.push(Commands.heal());
    actor.behavior.commands.push(Commands.fight());
    actor.behavior.behaviors.push(Behaviors.healSelf);
    actor.behavior.behaviors.push(Behaviors.healAllies);
    actor.behavior.behaviors.push(Behaviors.attackEnemies);
    return actor;
  },
};
