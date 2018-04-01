import _State from './_State';
import GameObjects from '../game_objects';
import DisplayObjects from '../display_objects';

export default class Gameplay extends _State {
  create () {
    this.stage.backgroundColor = '#223344';
    this.knight = GameObjects.knight(game, 40, 80);
    this.wizard = GameObjects.wizard(game, 215, 80);
    this.add.existing(this.knight);
    this.add.existing(this.wizard);
  }

  update () {
  }
}
