import Knightly from './Knightly';
import Wizardly from './Wizardly';

module.exports = {
  knightly: function knightly (actor) {
    return new Knightly(actor);
  },

  wizardly: function wizardly (actor) {
    return new Wizardly(actor);
  }
};
