export default class TurnManager {
  constructor (actors = []) {

    // TODO: This creates a random turn order, but it'd be nice to do something more deliberate
    for (let c = actors.length - 1; c > 0; c--) {
      let b = Math.floor(Math.random() * (c + 1));
      let a = actors[c];
      actors[c] = actors[b];
      actors[b] = a;
    }

    this.iterator = this.generator(actors);
  }

  next () {
    return this.iterator.next().value;
  }

  * generator (actors = []) {
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
}
