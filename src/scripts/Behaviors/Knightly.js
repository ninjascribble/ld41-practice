export default class Knightly {
  constructor(actor) {
    this.actor = actor;
  }

  perform() {
    const actor = this.actor;
    const target = actor.targets.enemies().alive().any;
    const action = actor.commands[0].createAction(actor, actor.targets);
    const description = action.message;
    const perform = action.perform;

    return { actor, target, description, perform };
  }
}
