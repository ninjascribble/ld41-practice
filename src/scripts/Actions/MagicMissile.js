export default class MagicMissile {
  constructor (actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message () {
    return `${this.actor.name} fires a magical blast towards ${this.target.name}`;
  }

  perform () {
    const hit = this.actor.rollMagHit();
    const avd = this.target.rollMagAvd();
    const dmg = this.actor.rollMagDmg() * (.8 + Math.random());
    const def = this.target.rollMagDef();
    const result = (hit < avd) ? 0 : Math.floor(Math.max(0, (dmg - def)));

    this.target.takeDamage(result);

    if (this.target.hp <= 0) {
      return `${this.target.name} is completely engulfed in flame!`;
    } else if (hit < avd) {
      return `${this.target.name} swiftly dodged away`;
    } else if (result > 0) {
      return `${this.target.name} took ${dmg} point${ dmg > 1 ? 's' : '' } of damage!`;
    } else {
      return `${this.target.name} didn't even blink!`;
    }
  }
}
