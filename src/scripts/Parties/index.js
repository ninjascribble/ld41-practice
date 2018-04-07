import Party from './Party';

export default {
  party: function party (...members) {
    return new Party(...members);
  }
};
