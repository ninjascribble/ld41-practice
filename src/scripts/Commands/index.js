import Command from './Command';
import Fight from '../Actions/Fight';

module.exports = {
  fight: function fight() {
    return new Command('Fight', Fight);
  }
};
