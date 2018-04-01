export default class Fight {
  constructor(actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message() {
    return `${this.actor.name} is attacking ${this.target.name}`;
  }

  perform(actor, target) {
    const dmg = Math.floor(Math.random() * 200);
    this.target.takeDamage(dmg);
    return `${this.target.name} took ${dmg} points of damage!`;
  }
}
