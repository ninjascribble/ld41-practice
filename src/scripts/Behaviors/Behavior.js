import TargetReducer from './TargetReducer';

export default class Behavior {
  constructor (actor) {
    this.actor = actor;
    this.allies = [];
    this.enemies = [];
    this.commands = [];
    this.behaviors = [];
  }

  get targets () {
    return new TargetReducer(this.actor, this.allies, this.enemies);
  }

  next () {
    const decision = this.behaviors.reduce((result, behavior) => {
      return result || behavior(this.actor, this.targets, this.commands);
    }, null);

    return decision.command.createAction(this.actor, decision.target);
  }
}
