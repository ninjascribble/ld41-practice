import Command from './Command';
import Fight from '../Actions/Fight';
import MagicMissile from '../Actions/Spells/MagicMissile';

module.exports = {
  fight: function fight () {
    return new Command('Fight', Fight);
  },

  magicMissile: function magicMissile () {
    return new Command('MagicMissile', MagicMissile);
  }
};
