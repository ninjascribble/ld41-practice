Action
--
Actions describe the effects of having done something. They calculate and apply those effects to given targets, but they do not specify the cost of doing so or any other criteria. This makes it easier to execute an action in many contexcts, e.g. a Fire spell could be the effect of a spell command that costs 2 SP, or an item that is consumed when used. It could even be the result of a field condition -- the point is it doesn't really matter, and the effects are the same regardless.

Command
--
Commands describe which actions can be taken at the current moment by a given actor. They determine whether or not the actor can meet criteria for executing an action, and calculate and apply the cost of the action when it is executed.

Consider: Commands may also offer up the targets that are current available to it, e.g. "Poison" cannot be used on a target that is already poisoned. I'm not sure about this though... if the actor is capable of _using_ the poison command, maybe they should be allowed to make the mistake of using it on an enemy that will be unaffected...

Behavior
--
Behaviors describe how a computer-controlled actor will select commands and targets. They are aware of which commands and targets are currently available, and choose which command to execute against whom given the current situation. Behaviors are generally role-based, e.g. a Wizard may prefer to use magic against their enemies, whereas a Cleric may prefer to heal a wounded ally.

In the case of a player-controlled actor, player input replaces scripted behaviors.

Quirk
--
Quirks govern behavioral choices. These apply to both computer- and player-controlled actors, and may override a chosen command and/or target if the situation warrants it. Quirks are not role-based, instead they represent an actor's personality -- merits, biases, and all. E.g. a Soldier will normally prefer martial combat, but one with the kleptomaniac quirk may take the opportunity to steal from a weak opponent instead.

It's important that quirks should have a _chance_ to activate if its preconditions are met, but should not _automatically_ activate simply because its preconditions are met. Quirks are meant to add color to combat -- not to take over combat behaviors entirely.

Party-member quirks are persistent. Party-members may be born with or acquire quirks, but the player should not be aware until after they've presented themselves in combat.
