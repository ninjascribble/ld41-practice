export default class Fight {
  constructor (actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message () {
    return `${this.actor.name} is attacking ${this.target.name}`;
  }

  perform () {
    const atk = Math.floor(this.actor.attributes.str / 2 * (Math.random() + 1));
    const def = Math.floor(this.target.attributes.con / 2);
    const evd = Math.floor(this.target.attributes.dex / 4 * (Math.random() + 1));
    const dmg = Math.max(0, atk - (def + evd));

    this.target.takeDamage(dmg);

    if (this.target.hp <= 0) {
      return 'SMAAAAAAAAAAAAASH!';
    } else if (dmg > 0) {
      return `${this.target.name} took ${dmg} point${ dmg > 1 ? 's' : '' } of damage!`;
    } else if (def > evd) {
      return `${this.target.name} shrugged it off`;
    } else if (evd > def) {
      return `${this.target.name} dodged the attack`;
    } else {
      return `${this.actor.name} couldn't even touch ${this.target.name}!`;
    }
  }
}
