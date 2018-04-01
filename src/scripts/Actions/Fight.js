export default class Fight {
  constructor(actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message() {
    return `${this.actor.name} is attacking ${this.target.name}`;
  }

  perform() {
    const atk = Math.floor(this.actor.attributes.str / 2 * (Math.random() + 1));
    const def = Math.floor(this.target.attributes.con / 2);
    const evd = Math.floor(this.actor.attributes.dex / 4 * (Math.random() + 1));
    const dmg = Math.max(0, atk - (def + evd));

    this.target.takeDamage(dmg);
    return `${this.target.name} took ${dmg} points of damage!`;
  }
}
