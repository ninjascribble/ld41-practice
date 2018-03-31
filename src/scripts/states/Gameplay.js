import _State from './_State';
import GameObjects from '../game_objects';
import DisplayObjects from '../display_objects';

export default class Gameplay extends _State {
  create () {
    this.stage.backgroundColor = '#223344';
    this.world.setBounds(0, 0, 1400, 1400);
    this.player = GameObjects.player(game, this.world.centerX, 60);
    this.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON);

    this.add.existing(this.titleText());
    this.add.existing(this.alphabetText());
    this.add.existing(this.actionText());
    this.add.existing(this.player);
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
    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.respawn(game.world.centerX, this.player.y);
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.O)) {
      this.player.destroy();
    }

    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.player.bankLeft();
    } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.player.bankRight();
    } else {
      this.player.normal();
    }
  }
}
