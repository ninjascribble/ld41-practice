export default class Party {
  constructor (...members) {
    this.members = members;
  }

  get alive () {
    return this.members.some(member => member.alive);
  }
}
