import BitmapFont from './BitmapFont';
import CharacterCard from './CharacterCard';

const DISPLAY_FONT = 'Blocktopia_32pt';
const BODY_FONT = 'Blocktopia_12pt';
const CHARACTER_CARD = 'CharacterCard';

export default {
  load: function load (loader) {
    loader.load.bitmapFont(DISPLAY_FONT, 'Blocktopia_32pt.png', 'Blocktopia_32pt.fnt');
    loader.load.bitmapFont(BODY_FONT, 'Blocktopia_12pt.png', 'Blocktopia_12pt.fnt');
    loader.load.image(CHARACTER_CARD, 'CharacterCard.png');
  },

  displayFont: function displayFont (game, text = '', x = 0, y = 0, align = 'left') {
    return new BitmapFont(game, x, y, DISPLAY_FONT, text, 30, align);
  },

  bodyFont: function bodyFont (game, text = '', x = 0, y = 0, align = 'left') {
    return new BitmapFont(game, x, y, BODY_FONT, text, 12, align);
  },

  characterCard: function characterCard (game, x, y, character) {
    const bkg = new Phaser.Image(game, x, y, CHARACTER_CARD);
    return new CharacterCard(game, x, y, bkg, character);
  }
};
