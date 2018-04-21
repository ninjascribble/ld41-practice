export default class Fight {
  constructor (actor, target) {
    this.actor = actor;
    this.target = target;
  }

  get message () {
    return `${this.actor.name} is attacking ${this.target.name}`;
  }

  perform () {
    const hit = this.actor.rollPhysHit();
    const avd = this.target.rollPhysAvd();
    const dmg = this.actor.rollPhysDmg() * (.8 + Math.random());
    const def = this.target.rollPhysDef();
    const result = (hit < avd) ? 0 : Math.floor(Math.max(0, (dmg - def)));

    this.target.takeDamage(result);

    if (this.target.hp <= 0) {
      return 'SMAAAAAAAAAAAAASH!';
    } else if (hit < avd) {
      return `${this.actor.name} missed`;
    } else if (result > 0) {
      return `${this.target.name} took ${dmg} point${ dmg > 1 ? 's' : '' } of damage!`;
    } else {
      return `${this.actor.name} shrugged it off`;
    }
  }
}
