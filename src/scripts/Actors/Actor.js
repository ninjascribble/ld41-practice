import Statuses from '../Enums/Statuses';
import Behavior from '../Behaviors/Behavior';

export default class Actor {
  constructor (name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.behavior = new Behavior(this);
    this.reset();
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

  get allies() {
    return this.behavior.allies;
  }

  get enemies() {
    return this.behavior.enemies;
  }

  get commands() {
    return this.behavior.commands;
  }

  get behaviors() {
    return this.behavior.behaviors;
  }

  reset () {
    this.hp = this.attributes.hp;
    this.sp = this.attributes.sp;
  }

  nextAction() {
    return this.behavior.next();
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
