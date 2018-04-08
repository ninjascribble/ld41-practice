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
    const decision = this.healSelf() || this.healAllies() || this.attackEnemies();

    return decision.command.createAction(this.actor, decision.target);
  }

  healSelf () {
    const target = this.targets.self().hurt().any;
    const command = this.commands.find((command) => {
      return command.name == 'Heal' && command.actorMeetsRequirements(this.actor);
    });

    if (target && command) {
      return { target, command };
    }
  }

  healAllies () {
    const target = this.targets.allies().hurt().any;
    const command = this.commands.find((command) => {
      return command.name == 'Heal' && command.actorMeetsRequirements(this.actor);
    });

    if (target && command) {
      return { target, command };
    }
  }

  attackEnemies () {
    const target = this.targets.enemies().alive().any;
    const command = this.commands.find((command) => {
      return command.name != 'Heal' && command.actorMeetsRequirements(this.actor);
    });

    if (target && command) {
      return { target, command };
    }
  }
}
