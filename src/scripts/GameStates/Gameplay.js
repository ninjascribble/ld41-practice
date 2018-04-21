import DisplayObjects from '../DisplayObjects';
import Actors from '../Actors';
import Parties from '../Parties';
import TurnManager from '../Combat/TurnManager';

export default class Gameplay extends Phaser.State {
  create () {

    // TODO: Color should be an Enum
    this.stage.backgroundColor = '#223344';

    // Create the parties
    this.teamA = Parties.party(
      Actors.knight('Vimes'),
      Actors.palladin('Carrot'),
      Actors.barbarian('Angua')
    );

    this.teamB = Parties.party(
      Actors.wizard('Weatherwax'),
      Actors.cleric('Ogg'),
      Actors.wizard('Magrat')
    );

    // Create the battlefield
    this.teamA.members.forEach((knight, i) => {
      knight.attributes.level = 50;
      knight.allies.push(...this.teamA.members.filter(ally => ally != knight));
      knight.enemies.push(...this.teamB.members);
      knight.reset();
      DisplayObjects.characterCard(game, 5, (i * 80 + 10 * i) + 5, knight);
    });

    this.teamB.members.forEach((wizard, i) => {
      wizard.attributes.level = 50;
      wizard.allies.push(...this.teamB.members.filter(ally => ally != wizard));
      wizard.enemies.push(...this.teamA.members);
      wizard.reset();
      DisplayObjects.characterCard(game, 244, (i * 80 + 10 * i) + 5, wizard);
    });

    this.turnManager = new TurnManager([].concat(
      this.teamA.members,
      this.teamB.members
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
    const action = actor.nextAction();
    const result = action.perform();

    this.logger.group(action.message);
    this.logger.log(result);
    this.logger.groupEnd();

    if (!this.teamA.alive || !this.teamB.alive) {
      this.gameOver();
    } else {
      this.resume();
    }
  }

  gameOver () {
    const loser = this.teamA.alive ? 'Team B' : 'Team A';
    const winner = this.teamA.alive ? 'Team A' : 'Team B';

    this.logger.log(`%c${loser} are wiped out`, 'color:red');
    this.logger.log(`%c${winner} win!`, 'color:goldenrod');
  }
}
