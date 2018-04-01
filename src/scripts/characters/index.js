import Character from './Character';

module.exports = {
  knight: function knight (name) {
    return new Character(name, {
      hp: 1027,
      sp: 38
    });
  },

  wizard: function wizard (name) {
    return new Character(name, {
      hp: 841,
      sp: 153
    });
  }
}
