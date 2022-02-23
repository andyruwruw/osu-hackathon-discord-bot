/**
 * Database item with an id.
 */
 interface IDatabaseModel {
  /**
   * Unique identifier for the item, use Discord ID when available.
   */
  id: string;
}

/**
 * Database item with an id, and guildId.
 */
interface IGuildItem extends IDatabaseModel {
  /**
   * Unique identifier for the Discord server.
   */
  guildId: string;
}

/**
 * Database item with an id, guildId, and name.
 */
interface INameableGuildItem extends IGuildItem {
  /**
   * Name of the item.
   */
  name: string;
}

/**
 * Database item with an id, guildId, name and description.
 */
interface IDescribableGuildItem extends INameableGuildItem {
  /**
   * Item description.
   */
  description: string;
}

/**
 * Database representation of a Discord channel.
 */
export interface IChannel extends IGuildItem {
  /**
   * Whether the channel is the designated channel for commands.
   */
  isCommandChannel: boolean;

  /**
   * Whether the channel is the designated channel for admin commands.
   */
  isAdminCommandChannel: boolean;

  /**
   * Whether the channel is the designated channel for error logs.
   */
  isErrorLog: boolean;
}

/**
 * Database representation of a Discord server.
 */
export interface IGuild extends IDatabaseModel {}

/**
 * Database representation of a hackathon.
 */
export interface IHackathon extends INameableGuildItem {
  /**
   * Theme of the hackathon.
   */
  theme: string;

  /**
   * Start date of the hackathon.
   */
  start: Date;

  /**
   * End date of the hackathon.
   */
  end: Date;

  /**
   * Number of participants in the hackathon.
   */
  participants: number;

  /**
   * Total prize pool amount.
   */
  prizePool: number;

  /**
   * Unique identifier of the prizes in the hackathon.
   */
  prizeIds: string[];
}

/**
 * Database representation of a Discord member.
 */
export interface IMember extends INameableGuildItem {
  /**
   * Profile picture of the member.
   */
  imageUrl: string;

  /**
   * Member's Discord level.
   */
  level: number;

  /**
   * Member's XP to the next level.
   */
  xp: number;
}

/**
 * Database representation of a Discord message.
 */
export interface IMessage extends IGuildItem {
  /**
   * Whether this message assigns rolls based on reactions.
   */
  isRoleAssigner: boolean;

  /**
   * What roles the message assignes based on reactions.
   */
  roleAssignments: Record<string, string>[];
}

/**
 * Database representation of a hackathon prize.
 */
export interface IPrize extends IDescribableGuildItem {
  /**
   * Index of the prize.
   */
  index: number;
}

/**
 * Database representation of a hackathon project.
 */
export interface IProject extends IDescribableGuildItem {
  /**
   * Hackathon the project belongs to.
   */
  hackathonId: string;

  /**
   * Image of the project.
   */
  imageUrl: string;

  /**
   * Users associated with project.
   */
  userIds: string[];

  /**
   * Live URL with project.
   */
  liveUrl: string;

  /**
   * URL to demo video of project.
   */
  demoUrl: string;

  /**
   * ID of prize won.
   */
  prizeId: string | null;
}

/**
 * Database representation of a Discord role.
 */
export interface IRole extends INameableGuildItem {
  /**
   * Color of the role.
   */
  color: string;

  /**
   * Role's purpose, type.
   */
  type: string;
}
