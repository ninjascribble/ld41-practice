import Statuses from '../Enums/Statuses';
import Behavior from '../Behaviors/Behavior';
import Attributes from '../Attributes/Attributes';

export default class Actor {
  constructor (name) {
    this.name = name;
    this.attributes = new Attributes();
    this.behavior = new Behavior(this);
    this.reset();
  }

  get allies () {
    return this.behavior.allies;
  }

  get enemies () {
    return this.behavior.enemies;
  }

  get commands () {
    return this.behavior.commands;
  }

  get behaviors () {
    return this.behavior.behaviors;
  }

  get alive () {
    return this.status != Statuses.DEAD;
  }

  get status () {
    if (this.hp < 1) {
      return Statuses.DEAD;
    } else if (this.hp <= this.attributes.hp / 2) {
      return Statuses.HURT;
    } else {
      return Statuses.OKAY;
    }
  }

  reset () {
    this.hp = this.attributes.hp;
    this.sp = this.attributes.sp;
  }

  nextAction () {
    return this.behavior.next();
  }

  rollPhysHit() {
    return Math.floor(((this.attributes.str + this.attributes.dex) / 2) + (Math.random() * 20));
  }

  rollPhysAvd() {
    return Math.floor(((this.attributes.con + this.attributes.dex) / 4) + (Math.random() * 20));
  }

  rollPhysDmg() {
    return Math.floor(this.attributes.str * this.attributes.level / 14);
  }

  rollPhysDef() {
    return Math.floor(this.attributes.con * this.attributes.level / 20);
  }

  rollMagHit() {
    return Math.floor(((this.attributes.int + this.attributes.wis) / 2) + (Math.random() * 20));
  }

  rollMagAvd() {
    return Math.floor(((this.attributes.wis + this.attributes.dex) / 4) + (Math.random() * 20));
  }

  rollMagDmg() {
    return Math.floor(this.attributes.int * this.attributes.level / 14);
  }

  rollMagDef() {
    return Math.floor(this.attributes.wis * this.attributes.level / 20);
  }

  takeDamage (amount = 0) {
    this.hp = Math.max(this.hp - amount, 0);
  }

  healDamage (amount = 0) {
    this.hp = Math.min(this.hp + amount, this.attributes.hp);
  }

  takeSkillPoints (amount = 0) {
    this.sp = Math.max(this.sp - amount, 0);
  }
}
