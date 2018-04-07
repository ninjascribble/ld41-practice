import DisplayObjects from '../DisplayObjects';
import Actors from '../Actors';
import Parties from '../Parties';
import TurnManager from '../Combat/TurnManager';

export default class Gameplay extends Phaser.State {
  create () {

    // TODO: Color should be an Enum
    this.stage.backgroundColor = '#223344';

    // Create the parties
    this.knights = Parties.party(
      Actors.knight('Vimes'),
      Actors.knight('Carrot'),
      Actors.knight('Angua')
    );

    this.wizards = Parties.party(
      Actors.wizard('Weatherwax'),
      Actors.wizard('Ogg'),
      Actors.wizard('Magrat')
    );

    // Create the battlefield
    this.knights.members.forEach((knight, i) => {
      knight.behavior.allies.push(...this.knights.members.filter(ally => ally != knight));
      knight.behavior.enemies.push(...this.wizards.members);
      DisplayObjects.characterCard(game, 5, (i * 80 + 10 * i) + 5, knight);
    });

    this.wizards.members.forEach((wizard, i) => {
      wizard.behavior.allies.push(...this.wizards.members.filter(ally => ally != wizard));
      wizard.behavior.enemies.push(...this.knights.members);
      DisplayObjects.characterCard(game, 244, (i * 80 + 10 * i) + 5, wizard);
    });

    this.turnManager = new TurnManager([].concat(
      this.knights.members,
      this.wizards.members
    ));

    // TODO: Replace browser console with in-game console
    this.logger = console;
    this.logger.clear();

    this.resume();
  }

  resume () {
    game.time.events.add(100, () => this.step());
  }

  step () {
    const actor = this.turnManager.next();
    const action = actor.behavior.next();
    const result = action.perform();

    this.logger.group(action.message);
    this.logger.log(result);
    this.logger.groupEnd();

    if (!this.knights.alive || !this.wizards.alive) {
      this.gameOver();
    } else {
      this.resume();
    }
  }

  gameOver () {
    const loser = this.knights.alive ? 'The Wizards' : 'The Knights';
    const winner = this.knights.alive ? 'The Knights' : 'The Wizards';

    this.logger.log(`%c${loser} are wiped out`, 'color:red');
    this.logger.log(`%c${winner} win!`, 'color:goldenrod');
  }
}
