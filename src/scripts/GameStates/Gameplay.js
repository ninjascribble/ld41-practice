import GameState from './GameState';
import GameObjects from '../GameObjects';
import DisplayObjects from '../DisplayObjects';
import Characters from '../Characters';

export default class Gameplay extends GameState {
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
