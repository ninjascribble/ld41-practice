import _State from './_State';
import GameObjects from '../game_objects';
import DisplayObjects from '../display_objects';
import Characters from '../characters';

export default class Gameplay extends _State {
  create () {
    this.stage.backgroundColor = '#223344';
    this.knight = Characters.knight('Horace');
    this.wizard = Characters.wizard('Ridcully');
    this.knightCard = GameObjects.characterCard(game, 40, 80, this.knight);
    this.wizardCard = GameObjects.characterCard(game, 215, 80, this.wizard);
    this.add.existing(this.knightCard);
    this.add.existing(this.wizardCard);
  }

  update () {
  }
}
