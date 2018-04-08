export default class Heal {
  constructor (actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message () {
    return `${this.actor.name} rushes to heal ${this.target.name}`;
  }

  perform () {
    const atk = Math.floor(this.actor.attributes.wis * (Math.random() + .25));
    const def = 0;
    const evd = 0;
    const dmg = Math.max(0, atk - (def + evd));

    this.target.healDamage(dmg);

    if (this.target.hp == this.target.attributes.hp) {
      return `${this.target.name} is fully healed!`;
    } else {
      return `${this.target.name} recovered ${dmg} hp`;
    }
  }
}
