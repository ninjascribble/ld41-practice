import DisplayObjects from '../display_objects';

export default class CharacterCard extends Phaser.Group {
  constructor (game, x, y, character) {
    super(game);
    this.x = x;
    this.y = y;
    this.character = character;

    const bkg = DisplayObjects.characterCard(game, 0, 0);
    const name = DisplayObjects.bodyFont(game, character.name, 35, 14, 'center');
    const hpLabel = DisplayObjects.bodyFont(game, 'HP', 6, 29);
    const spLabel = DisplayObjects.bodyFont(game, 'SP', 6, 45);

    this.hp = DisplayObjects.bodyFont(game, character.attributes.hp, 26, 29);
    this.sp = DisplayObjects.bodyFont(game, character.attributes.sp, 26, 45);

    name.maxWidth = 60;

    this.addChild(bkg);
    this.addChild(name);
    this.addChild(hpLabel);
    this.addChild(spLabel);
    this.addChild(this.hp);
    this.addChild(this.sp);
  }

  update () {
    this.hp.text = this.character.attributes.hp;
    this.sp.text = this.character.attributes.sp;
  }
}
