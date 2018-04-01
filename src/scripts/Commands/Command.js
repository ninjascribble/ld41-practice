export default class Command {
  constructor(name, actionClass) {
    this.name = name;
    this.actionClass = actionClass;
  }

  createAction(actor, target) {
    return new this.actionClass(actor, target);
  }
}
