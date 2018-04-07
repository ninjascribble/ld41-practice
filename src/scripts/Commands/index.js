import Command from './Command';
import Fight from '../Actions/Fight';
import MagicMissile from '../Actions/MagicMissile';

module.exports = {
  fight: function fight () {
    return new Command('Fight', 0, Fight);
  },

  magicMissile: function magicMissile () {
    return new Command('MagicMissile', 1, MagicMissile);
  }
};
