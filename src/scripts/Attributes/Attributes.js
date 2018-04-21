export default class Attributes {
  static DEFAULT_VALUES = {
    hp: 100,
    sp: 10,
    str: 10,
    con: 10,
    dex: 10,
    int: 10,
    wis: 10
  }

  static DEFAULT_STRATEGY = {
    hp: .75,
    sp: .75,
    str: .75,
    con: .75,
    dex: .75,
    int: .75,
    wis: .75
  }

  constructor() {
    this.level = 1;
    this._core = Object.assign({}, this.constructor.DEFAULT_VALUES);
    this._strategy = Object.assign({}, this.constructor.DEFAULT_STRATEGY);
  }

  set core(values) {
    Object.keys(this.constructor.DEFAULT_VALUES).forEach((key) => {
      this._core[key] = values[key] || this.constructor.DEFAULT_VALUES[key];
    });
  }

  set strategy(values) {
    Object.keys(this.constructor.DEFAULT_STRATEGY).forEach((key) => {
      this._strategy[key] = values[key] || this.constructor.DEFAULT_STRATEGY[key];
    });
  }

  get hp() {
    return Math.min(999, this.scale(this._core.hp, this._strategy.hp));
  }

  get sp() {
    return Math.min(99, this.scale(this._core.sp, this._strategy.sp));
  }

  get str() {
    return Math.min(99, this.scale(this._core.str, this._strategy.str));
  }

  get con() {
    return Math.min(99, this.scale(this._core.con, this._strategy.con));
  }

  get dex() {
    return Math.min(99, this.scale(this._core.dex, this._strategy.dex));
  }

  get int() {
    return Math.min(99, this.scale(this._core.int, this._strategy.int));
  }

  get wis() {
    return Math.min(99, this.scale(this._core.wis, this._strategy.wis));
  }

  get all() {
    return {
      level: this.level,
      hp: this.hp,
      sp: this.sp,
      str: this.str,
      con: this.con,
      dex: this.dex,
      int: this.int,
      wis: this.wis
    }
  }

  scale(core, strategy) {
    return Math.floor(
      (this.level * strategy + Math.pow(this.level, 1/2)) * core / 14
    )
  }
}
