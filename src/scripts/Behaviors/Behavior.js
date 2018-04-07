import TargetReducer from './TargetReducer';

export default class Behavior {
  constructor (actor) {
    this.actor = actor;
    this.allies = [];
    this.enemies = [];
    this.commands = [];
  }

  get targets () {
    return new TargetReducer(this.actor, this.allies, this.enemies);
  }

  next () {
    const target = this.targets.enemies().alive().any;
    const command = this.commands.find(command => command.actorMeetsRequirements(this.actor));

    return command.createAction(this.actor, target);
  }
}
