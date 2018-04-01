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

  titleText () {
    return DisplayObjects.displayFont(game, 'THIS IS THE GAME', this.world.centerX, 40, 'center');
  }

  alphabetText () {
    var text = DisplayObjects.bodyFont(game, `
AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
1,234,567,890 Ti Tj To 77 71 73 91910 .:;,
!№;%:?*()_+-=.,/|"'@#$^&{}[]`, this.world.centerX, 145, 'center');
    text.maxWidth = 300;
    return text;
  }

  actionText () {
    var text = DisplayObjects.bodyFont(game, 'Press Spacebar to Play!', this.world.centerX, 190, 'center');
    this.time.events.loop(400, () => text.visible = !text.visible);
    return text;
  }

  update () {
  }
}
