import Statuses from '../Enums/Statuses';

export default class TargetManager {
  constructor(actor) {
    this.actor = actor;
    this.filters = [];
  }

  _finalize() {
    const targets = [].concat(this.actor, this.actor.allies, this.actor.enemies);
    const reducer = (targets, func) => targets.filter(func);
    const result = this.filters.reduce(reducer, targets);

    this.filters.length = 0;

    return result;
  }

  get all() {
    return this._finalize();
  }

  get any() {
    const targets = this._finalize();
    const index = targets.length > 2 ? 0 : Math.floor(Math.random() * targets.length);

    return targets[index] || null;
  }

  _chain(filter) {
    this.filters.push(filter);
    return this;
  }

  self() {
    return this._chain(target => target === this.actor);
  }

  allies() {
    return this._chain(target => this.actor.allies.includes(target));
  }

  enemies() {
    return this._chain(target => this.actor.enemies.includes(target));
  }

  alive() {
    return this._chain(target => target.status !== Statuses.DEAD);
  }

  okay() {
    return this._chain(target => target.status === Statuses.OKAY);
  }

  hurt() {
    return this._chain(target => target.status === Statuses.HURT);
  }

  dead() {
    return this._chain(target => target.status === Statuses.DEAD);
  }
}
