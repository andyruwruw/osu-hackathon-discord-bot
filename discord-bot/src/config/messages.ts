/**
 * Response to the ready event.
 */
export const MESSAGE_READY = 'Discord bot up and running!';

/**
 * Response to the ready event.
 */
export const MESSAGE_COMMANDS_REGISTERED = 'Registered commands with Discord and all Guilds.';

/**
 * Message to indicate command registration has begun.
 */
export const MESSAGE_COMMANDS_REGISTER_START = 'Attempting to register all commands with Discord';

/**
 * Message to notify of application command update.
 *
 * @param {string} id Application command Id.
 * @returns {string} Message.
 */
export const MESSAGE_COMMANDS_UPDATE = (
  id: string,
  isApplication: boolean = true,
) => `${isApplication ? 'Application' : 'Guild'} command ${id} changed, deleting for update.`;

/**
 * Response to data sync completion.
 */
export const MESSAGE_DATA_SYNCED = 'Database synced with Discord.';

/**
 * Message for Data Sync Start.
 */
export const MESSAGE_DATA_SYNC_START = 'Syncing database with Discord.';

/**
 * Error message for using abstract command.
 */
 export const MESSAGE_USED_ABSTRACT_COMMAND_ERROR = 'Attempted to use Abstract Command, use a concrete implementation instead.';

/**
 * Error message for using abstract handler.
 */
export const MESSAGE_USED_ABSTRACT_HANDLER_ERROR = 'Attempted to use Abstract Handler, use a concrete implementation instead.';

/**
 * Error message for using abstract response.
 */
 export const MESSAGE_USED_ABSTRACT_RESPONSE_ERROR = 'Attempted to use Abstract Response, use a concrete implementation instead.';

/**
 * Error message for when Discord API rate limits the bot.
 */
export const MESSAGE_RATE_LIMIT_REACHED = 'We\'ve been rate limited by Discord!';

/**
 * Feedback that a channel was created.
 */
export const MESSAGE_CHANNEL_CREATE = 'A channel was created and added to the database.';

/**
 * Feedback that a channel was deleted.
 */
export const MESSAGE_CHANNEL_DELETE = 'A channel was removed from the database in sync with Discord.';

/**
 * Feedback that a channel was updated.
 */
export const MESSAGE_CHANNEL_UPDATE = 'A channel was updated in the database in sync with Discord.';

/**
 * Feedback that an emoji was deleted that was needed for a role assignment.
 */
export const MESSAGE_ROLE_ASSIGNMENT_EMOJI_DELETED = 'A server emoji was deleted that was assigned to a message role assigner. The message role assignment will be inactive but existing roles will persist. A new role assignment message will need to be made.';

/**
 * Feedback that an emoji was updated that was needed for a role assignment.
 */
export const MESSAGE_ROLE_ASSIGNMENT_EMOJI_UPDATE = 'A server emoji assigned to a message role assigner changed in ID, the role assigner is being updated.';

/**
 * Feedback that a user ban was applied.
 */
export const MESSAGE_USER_BAN_ADD = 'A user ban was detected, the user will be blocked from all other services as well.';

/**
 * Feedback that a user ban was applied.
 */
export const MESSAGE_USER_BAN_REMOVE = 'A user unban was detected, the user will be allowed other services.';

/**
 * Feedback that the bot was added to a server.
 */
export const MESSAGE_GUILD_CREATE = 'The bot was just added to a new server! Creating database items.';

/**
 * Feedback that the bot was removed from a server.
 */
export const MESSAGE_GUILD_DELETE = 'The bot was just removed from a server. Database items must be deleted manually to avoid data loss.';

/**
 * Feedback that a new user was added to a guild.
 */
export const MESSAGE_GUILD_MEMBER_ADD = 'A new member was added to the server and a database item was made.';

/**
 * Feedback that a user has rejoined the guild.
 */
export const MESSAGE_GUILD_MEMBER_ADD_REJOIN = 'A member who left has rejoined, their access has been enabled again.';

/**
 * Feedback that a new user was added to a guild.
 */
 export const MESSAGE_GUILD_MEMBER_REMOVE = 'A member left the server. Their data will need to be manually deleted but their tokens have been revoked.';

/**
 * Feedback that a new user was added to a guild.
 */
export const MESSAGE_GUILD_MEMBER_UPDATE = 'A member data was changed and is now being updated.';

/**
 * Feedback that a scheduled event was created.
 */
export const MESSAGE_SCHEDULED_EVENT_CREATE = 'An event was created.';

/**
 * Feedback that a scheduled event was deleted.
 */
export const MESSAGE_SCHEDULED_EVENT_DELETE = 'An event was deleted.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_SCHEDULED_EVENT_UPDATE = 'An event was updated.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_SCHEDULED_EVENT_USER_ADD = 'A user was added to a scheduled event.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_SCHEDULED_EVENT_USER_REMOVE = 'A user was removed from a scheduled event.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_GUILD_UPDATE = 'A server\'s data was changed and is now being updated.';

/**
 * Feedback that a scheduled event was added.
 */
 export const MESSAGE_DELETE_ROLE_ASSIGNER_MESSAGE = 'A role assignment message was deleted, deleting applicable database items.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_REACTION_ADD_ON_ROLE_ASSIGNER = 'A user reacted to a role assigner and is now being given the role.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_REACTION_REMOVE_ON_ROLE_ASSIGNER = 'A user undid reaction to a role assigner and is now being removed from the role.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_ROLE_CREATE = 'A new role was created and added to the database.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_ROLE_DELETE = 'A role was deleted and is beign removed from the database.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_ROLE_DELETE_ROLE_ASSIGNER = 'A role was deleted that a role assigner depended on. This role assigner will no longer function but will remain up.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_ROLE_UPDATE = 'A role\'s data was changed and is now being updated.';

/**
 * Feedback that a scheduled event was added.
 */
export const MESSAGE_USER_UPDATE = 'A user\'s data was changed and is now being updated.';

/**
 * Logs URL to invite bot.
 *
 * @param {string} url Invite URL.
 * @returns {string} Message for inviting bot.
 */
export const MESSAGE_INVITE_LINK = (url: string): string => (`You can invite the bot to a server using this link: ${url}`);