export default class Character {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
    this.commands = [];
    this.enemies = [];
    this.reset();
  }

  reset() {
    this.hp = this.attributes.hp;
    this.sp = this.attributes.sp;
  }

  status() {
    if (this.hp < 1) {
      return `${this.name} is dead`;
    }
    else if (this.hp <= this.attributes.hp / 2) {
      return `${this.name} is hurting`;
    }
    else if (this.hp > this.attributes.hp / 2) {
      return `${this.name} is ok`;
    }
    else if (this.hp == this.attributes.hp) {
      return `${this.name} is at full health`;
    }
  }

  nextAction() {
    const target = this.enemies[0];
    const action = this.commands[0].createAction(this, target);
    const description = action.message;
    const perform = action.perform;

    return { target, description, perform };
  }

  takeDamage(amount = 0) {
    const targetHp = this.hp - amount;
    this.hp = targetHp > 0 ? targetHp : 0;
  }
}
