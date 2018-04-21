import Actor from './Actor';
import Commands from '../Commands';
import Behaviors from '../Behaviors';

module.exports = {
  knight: function knight (name) {
    let actor = new Actor(name);
    actor.commands.push(Commands.heal());
    actor.commands.push(Commands.fight());
    actor.behaviors.push(Behaviors.healSelf);
    actor.behaviors.push(Behaviors.attackEnemies);
    actor.attributes.core = {
      // hp: 100,
      // sp: 5,
      // str: 11,
      // con: 13,
      // dex: 9,
      // int: 8,
      // wis: 7
    };
    actor.reset();
    return actor;
  },

  wizard: function wizard (name) {
    let actor = new Actor(name);
    actor.commands.push(Commands.magicMissile());
    actor.commands.push(Commands.fight());
    actor.behaviors.push(Behaviors.attackEnemies);
    actor.attributes.core = {
      // hp: 70,
      // sp: 5,
      // str: 5,
      // con: 6,
      // dex: 12,
      // int: 16,
      // wis: 12
    };
    actor.reset();
    return actor;
  },

  palladin: function palladin (name) {
    let actor = new Actor(name);
    actor.commands.push(Commands.heal());
    actor.commands.push(Commands.fight());
    actor.behaviors.push(Behaviors.healAllies);
    actor.behaviors.push(Behaviors.healSelf);
    actor.behaviors.push(Behaviors.attackEnemies);
    actor.attributes.core = {
      // hp: 100,
      // sp: 5,
      // str: 10,
      // con: 13,
      // dex: 9,
      // int: 8,
      // wis: 8
    };
    actor.reset();
    return actor;
  },

  cleric: function cleric (name) {
    let actor = new Actor(name);
    actor.commands.push(Commands.heal());
    actor.commands.push(Commands.fight());
    actor.behaviors.push(Behaviors.healSelf);
    actor.behaviors.push(Behaviors.healAllies);
    actor.behaviors.push(Behaviors.attackEnemies);
    actor.attributes.core = {
      // hp: 90,
      // sp: 6,
      // str: 7,
      // con: 8,
      // dex: 9,
      // int: 11,
      // wis: 13
    };
    actor.reset();
    return actor;
  },

  barbarian: function barbarian (name) {
    let actor = new Actor(name);
    actor.commands.push(Commands.heal());
    actor.commands.push(Commands.fight());
    actor.behaviors.push(Behaviors.healSelf);
    actor.behaviors.push(Behaviors.healAllies);
    actor.behaviors.push(Behaviors.attackEnemies);
    actor.attributes.core = {
      // hp: 90,
      // sp: 0,
      // str: 15,
      // con: 8,
      // dex: 11,
      // int: 8,
      // wis: 8
    };
    actor.reset();
    return actor;
  }
};
