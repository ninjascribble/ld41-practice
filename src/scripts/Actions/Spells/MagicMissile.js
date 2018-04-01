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

    if (this.actor.sp <= 0) {
      return `${this.actor.name} is out of SP...`;
    }
    else {
      this.actor.takeSkillPoints(1);
      this.target.takeDamage(dmg);

      if (this.target.hp <= 0) {
        return `${this.target.name} is completely engulfed in flame!`;
      }
      else if (dmg > 0) {
        return `${this.target.name} took ${dmg} point${ dmg > 1 ? 's' : '' } of damage!`;
      }
      else if (def > evd) {
        return `The spell was a dud...`;
      }
      else if (evd > def) {
        return `${this.target.name} swiftly dodged away`;
      }
      else {
        return `${this.target.name} didn't even blink!`;
      }
    }
  }
}
