export default class Character {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
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
    // We'll have to make an Action class at some point, but for now...
    const target = this.enemies[0];
    const description = `${this.name} is attacking ${target.name}`;
    const perform = () => {
      target.takeDamage(123);
      return `${target.name} took 123 points of damage!`;
    };

    return { target, description, perform };
  }

  takeDamage(amount = 0) {
    const targetHp = this.hp - amount;
    this.hp = targetHp > 0 ? targetHp : 0;
  }
}
