import CharacterCard from './CharacterCard';

const CHARACTER_CARD = 'CharacterCard';

module.exports = {
  load: function load (loader) {
    loader.load.image(CHARACTER_CARD, 'CharacterCard.png');
  },

  characterCard: function characterCard (game, x, y, character) {
    const bkg = new Phaser.Image(game, x, y, CHARACTER_CARD);
    return new CharacterCard(game, x, y, bkg, character);
  }
};
