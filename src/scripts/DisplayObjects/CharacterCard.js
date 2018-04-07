import DisplayObjectFactory from './index';
import Statuses from '../Enums/Statuses';

export default class CharacterCard extends Phaser.Group {
  constructor (game, x, y, bkg, character) {
    super(game);
    this.x = x;
    this.y = y;
    this.character = character;
    this.hpLabel = DisplayObjectFactory.bodyFont(game, 'HP', 6, 29);
    this.spLabel = DisplayObjectFactory.bodyFont(game, 'SP', 6, 45);
    this.hp = DisplayObjectFactory.bodyFont(game, character.hp, 26, 29);
    this.sp = DisplayObjectFactory.bodyFont(game, character.sp, 26, 45);
    this.name = DisplayObjectFactory.bodyFont(game, character.name, 35, 14, 'center');
    this.name.maxWidth = 60;

    this.addChild(bkg);
    this.addChild(this.hpLabel);
    this.addChild(this.spLabel);
    this.addChild(this.name);
    this.addChild(this.hp);
    this.addChild(this.sp);

    bkg.x = 0;
    bkg.y = 0;
  }

  update () {
    this.hp.text = this.character.hp;
    this.sp.text = this.character.sp;

    if (this.character.status == Statuses.DEAD) {
      this.hpLabel.tint = 0x444444;
      this.spLabel.tint = 0x444444;
      this.hp.tint = 0x444444;
      this.sp.tint = 0x444444;
      this.name.tint = 0x444444;
    } else if (this.character.status == Statuses.HURT) {
      this.hpLabel.tint = 0xDAA520;
      this.spLabel.tint = 0xDAA520;
      this.hp.tint = 0xDAA520;
      this.sp.tint = 0xDAA520;
      this.name.tint = 0xDAA520;
    } else if (this.character.status == Statuses.OKAY) {
      this.hpLabel.tint = 0xFFFFFF;
      this.spLabel.tint = 0xFFFFFF;
      this.hp.tint = 0xFFFFFF;
      this.sp.tint = 0xFFFFFF;
      this.name.tint = 0xFFFFFF;
    }
  }
}
