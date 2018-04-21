export default class Heal {
  constructor (actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message () {
    return `${this.actor.name} rushes to heal ${this.target.name}`;
  }

  perform () {
    const hit = this.actor.rollMagHit();
    const avd = this.target.rollMagAvd();
    const dmg = this.actor.rollMagDmg();
    const def = this.target.rollMagDef();
    const result = (hit < avd) ? 0 : Math.max(0, (dmg - def));

    this.target.healDamage(result);

    if (this.target.hp == this.target.attributes.hp) {
      return `${this.target.name} is fully healed!`;
    } else {
      return `${this.target.name} recovered ${result} hp`;
    }
  }
}
