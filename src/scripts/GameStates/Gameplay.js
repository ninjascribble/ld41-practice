import DisplayObjects from '../DisplayObjects';
import Actors from '../Actors';
import Parties from '../Parties';

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
      knight.behavior.allies = this.knights.members.filter(ally => ally != knight);
      knight.behavior.enemies = this.wizards.members;
      DisplayObjects.characterCard(game, 5, (i * 80 + 10 * i) + 5, knight);
    });

    this.wizards.members.forEach((wizard, i) => {
      wizard.behavior.allies = this.wizards.members.filter(ally => ally != wizard);
      wizard.behavior.enemies = this.knights.members;
      DisplayObjects.characterCard(game, 244, (i * 80 + 10 * i) + 5, wizard);
    });

    // TODO: This creates a random turn order, but it'd be nice to do something more deliberate
    let actors = [].concat(this.knights.members, this.wizards.members);

    for (let c = actors.length - 1; c > 0; c--) {
      let b = Math.floor(Math.random() * (c + 1));
      let a = actors[c];
      actors[c] = actors[b];
      actors[b] = a;
    }

    // TODO: This is kind of shitty... can't I just use the instance method?
    this.turnManager = this.nextActor(...actors);

    // TODO: Replace browser console with in-game console
    console.clear();

    this.resume();
  }

  * nextActor (...actors) {
    const _a = [];
    const _b = [];

    let queue = _a;
    let dequeue = _b;

    // Fill the first queue with our sorted list of actors
    queue.push(...actors);

    // Only keep going while there are live actors to choose from
    while (actors.some(actor => actor.alive)) {
      dequeue.unshift(queue.pop());

      // Return the first live actor we come across
      if (dequeue[0].alive) {
        yield dequeue[0];
      }

      // Switch the queues when the active one becomes exhausted
      if (queue.length == 0) {
        queue = (queue == _a) ? _b : _a;
        dequeue = (queue == _a) ? _b : _a;
      }
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

    if (!this.knights.alive || !this.wizards.alive) {
      this.gameOver();
    } else {
      this.resume();
    }
  }

  gameOver () {
    const loser = this.knights.alive ? 'The Wizards' : 'The Knights';
    const winner = this.knights.alive ? 'The Knights' : 'The Wizards';

    console.log(`%c${loser} are wiped out`, 'color:red');
    console.log(`%c${winner} win!`, 'color:goldenrod');
  }
}
