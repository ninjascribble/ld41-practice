import Behavior from './Behavior';

module.exports = {
  knightly: function knightly (actor) {
    return new Behavior(actor);
  },

  wizardly: function wizardly (actor) {
    return new Behavior(actor);
  }
};
