export default class MagicMissile {
  constructor(actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message() {
    return `${this.actor.name} fires a magical blast towards ${this.target.name}`;
  }

  perform() {
    const atk = Math.floor(this.actor.attributes.int * (Math.random() + .25));
    const def = Math.floor(this.target.attributes.wis / 2);
    const evd = Math.floor(this.actor.attributes.dex / 4 * (Math.random() + 1));
    const dmg = Math.max(0, atk - (def + evd));

    if (this.actor.sp > 0) {
      this.actor.takeSkillPoints(1);
      this.target.takeDamage(dmg);
      return `${this.target.name} took ${dmg} points of damage!`;
    }
    else {
      return `${this.actor.name} is out of SP...`;
    }
  }
}
