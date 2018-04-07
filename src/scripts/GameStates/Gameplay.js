import DisplayObjects from '../DisplayObjects';
import Actors from '../Actors';

export default class Gameplay extends Phaser.State {
  create () {

    // TODO: Color should be an Enum
    this.stage.backgroundColor = '#223344';

    // TODO: Maybe these should be created through parties too?
    this.knight = Actors.knight('Horace');
    this.wizard = Actors.wizard('Ridcully');

    // TODO: Need to replace these with Parties
    this.knight.behavior.enemies.push(this.wizard);
    this.wizard.behavior.enemies.push(this.knight);

    // NOTE: These get added to the stage automatically
    this.knightCard = DisplayObjects.characterCard(game, 5, 5, this.knight);
    this.wizardCard = DisplayObjects.characterCard(game, 244, 5, this.wizard);

    // TODO: Replace browser console with in-game console
    console.clear();

    // TODO: This is kind of shitty... can't I just use the instance method?
    this.turnManager = this.nextActor(this.knight, this.wizard);

    this.resume();
  }

  * nextActor (...actors) {
    let index = Math.floor(Math.random() * actors.length);

    while (true) {
      index = index ? 0 : 1;
      yield actors[index];
    }
  }

  resume () {
    game.time.events.add(1000, () => this.nextTurn());
  }

  nextTurn () {
    const actor = this.turnManager.next().value;
    const action = actor.behavior.nextAction();
    const result = action.perform();

    console.group(action.message);
    console.log(result);
    console.groupEnd();

    if (this.knight.hp <= 0 || this.wizard.hp <= 0) {
      this.gameOver();
    } else {
      this.resume();
    }
  }

  gameOver () {
    const loser = this.knight.hp <= 0 ? this.knight : this.wizard;
    const winner = loser == this.knight ? this.wizard : this.knight;

    console.log(`%c${loser.name} is dead`, 'color:red');
    console.log(`%c${winner.name} wins!`, 'color:goldenrod');
  }
}
