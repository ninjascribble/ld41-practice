import Statuses from '../Enums/Statuses';

export default class TargetReducer {
  constructor (actor, allies, enemies) {
    this._actor = actor;
    this._allies = allies;
    this._enemies = enemies;
    this.filters = [];
  }

  _finalize () {
    const targets = [].concat(this._actor, this._allies, this._enemies);
    const reducer = (targets, func) => targets.filter(func);
    const result = this.filters.reduce(reducer, targets);

    this.filters.length = 0;

    return result;
  }

  get all () {
    return this._finalize();
  }

  get any () {
    const targets = this._finalize();
    const index = Math.floor(Math.random() * targets.length);

    return targets[index] || null;
  }

  _chain (filter) {
    this.filters.push(filter);
    return this;
  }

  self () {
    return this._chain(target => target === this._actor);
  }

  allies () {
    return this._chain(target => this._allies.includes(target));
  }

  enemies () {
    return this._chain(target => this._enemies.includes(target));
  }

  alive () {
    return this._chain(target => target.status !== Statuses.DEAD);
  }

  okay () {
    return this._chain(target => target.status === Statuses.OKAY);
  }

  hurt () {
    return this._chain(target => target.status === Statuses.HURT);
  }

  dead () {
    return this._chain(target => target.status === Statuses.DEAD);
  }
}
