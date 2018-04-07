import Statuses from '../Enums/Statuses';

export default class Actor {
  constructor (name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.behavior = null;
    this.reset();
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

  takeDamage (amount = 0) {
    const targetHp = this.hp - amount;
    this.hp = targetHp > 0 ? targetHp : 0;
  }

  takeSkillPoints (amount = 0) {
    const targetSp = this.sp - amount;
    this.sp = targetSp > 0 ? targetSp : 0;
  }
}
