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

    this.knight.enemies.push(this.wizard);
    this.wizard.enemies.push(this.knight);
    this.turnManager = this.nextActor();

    console.clear();
    this.next();
  }

  * nextActor() {
    let actors = [this.knight, this.wizard];
    let index = Math.floor(Math.random() * 2);

    while(true) {
      index = index ? 0 : 1;
      yield actors[index];
    }
  }

  next() {
    if (this.wizard.hp <= 0) {
      console.log(`%c${this.wizard.name} is dead`, 'color:red')
      console.log(`%c${this.knight.name} wins!`, 'color:goldenrod')
      return;
    }

    const actor = this.turnManager.next().value;
    const action = actor.nextAction();

    console.log(action.description);

    const result = action.perform();

    console.log(result);
    console.log(action.target.status());

    game.time.events.add(1000, () => this.next());
  }
}
