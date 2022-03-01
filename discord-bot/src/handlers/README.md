# Event Handlers

These handlers are built to handle [Discord.js Client events](https://discord.js.org/#/docs/discord.js/stable/class/Client).

Each handler inherits from the [abstract handler class](), giving it access to the Discord.js client and database.

Each is essentially a static class with an `execute` method that deals with the event.

The following events are handled:

- [channelCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-channelCreate): [channel-create-handler.ts]()
- [channelDelete](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-channelDelete): [channel-delete-handler.ts]()
- [channelUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-channelUpdate): [channel-update-handler.ts]()
- [emojiCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-emojiCreate): [emoji-create-handler.ts]()
- [emojiDelete](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-emojiDelete): [emoji-delete-handler.ts]()
- [emojiUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-emojiUpdate): [emoji-update-handler.ts]()
- [error](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-error): [error-handler.ts]()
- [guildBanAdd](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildBanAdd): [guild-ban-add-handler.ts]()
- [guildBanRemove](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildBanRemove): [guild-ban-remove-handler.ts]()
- [guildCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildCreate): [guild-create-handler.ts]()
- [guildDelete](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildDelete): [guild-delete-handler.ts]()
- [guildMemberAdd](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildMemberAdd): [guild-member-add-handler.ts]()
- [guildMemberRemove](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildMemberRemove): [guild-member-remove-handler.ts]()
- [guildMemberUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildMemberUpdate): [guld-member-update-handler.ts]()
- [guildScheduledEventCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildScheduledEventCreate): [guild-scheduled-event-create-handler.ts]()
- [guildScheduledEventDelete](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildScheduledEventDelete): [guild-scheduled-event-delete-handler.ts]()
- [guildScheduledEventUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildScheduledEventUpdate): [guild-scheduled-event-update-handler.ts]()
- [guildScheduledEventUserAdd](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildScheduledEventUserAdd): [guild-scheduled-event-user-add-handler.ts]()
- [guildScheduledEventUserRemove](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildScheduledEventUserRemove): [guild-scheduled-event-user-remove-handler.ts]()
- [guildUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-guildUpdate): [guild-update-handler.ts]()
- [interactionCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-interactionCreate): [interaction-create-handler.ts]()
- [messageCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-messageCreate): [message-create-handler.ts]()
- [messageDelete](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-messageDelete): [message-delete-handler.ts]()
- [messageReactionAdd](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-messageReactionAdd): [message-reaction-add-handler.ts]()
- [messageReactionRemove](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-messageReactionRemove): [message-reaction-remove-handler.ts]()
- [rateLimit](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-rateLimit): [rate-limit-handler.ts]()
- [ready](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-ready): [ready-handler.ts]()
- [roleCreate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-roleCreate): [role-create-handler.ts]()
- [roleDelete](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-roleDelete): [role-delete-handler.ts]()
- [roleUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-roleUpdate): [role-update-handler.ts]()
- [userUpdate](https://discord.js.org/#/docs/discord.js/stable/class/Client?scrollTo=e-userUpdate): [user-update-handler.ts]()
