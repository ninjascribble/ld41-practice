module.exports = {
  healSelf (actor, targets, commands) {
    const target = targets.self().hurt().any;
    const command = commands.find((command) => {
      return command.name == 'Heal' && command.actorMeetsRequirements(actor);
    });

    if (target && command) {
      return { target, command };
    }
  },

  healAllies (actor, targets, commands) {
    const target = targets.allies().hurt().any;
    const command = commands.find((command) => {
      return command.name == 'Heal' && command.actorMeetsRequirements(actor);
    });

    if (target && command) {
      return { target, command };
    }
  },

  attackEnemies (actor, targets, commands) {
    const target = targets.enemies().alive().any;
    const command = commands.find((command) => {
      return command.name != 'Heal' && command.actorMeetsRequirements(actor);
    });

    if (target && command) {
      return { target, command };
    }
  }
};
