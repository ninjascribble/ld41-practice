export default class Command {
  constructor (name, spcost = 0, actionClass = null) {
    this.name = name;
    this.spcost = spcost;
    this.actionClass = actionClass;
  }

  actorMeetsRequirements (actor) {
    return (actor.sp >= this.spcost);
  }

  createAction (actor, target) {
    actor.takeSkillPoints(this.spcost);
    return new this.actionClass(actor, target);
  }
}
