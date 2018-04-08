import Command from './Command';
import Fight from '../Actions/Fight';
import Heal from '../Actions/Heal';
import MagicMissile from '../Actions/MagicMissile';

module.exports = {
  fight: function fight () {
    return new Command('Fight', 0, Fight);
  },

  heal: function heal () {
    return new Command('Heal', 1, Heal);
  },

  magicMissile: function magicMissile () {
    return new Command('MagicMissile', 1, MagicMissile);
  }
};
