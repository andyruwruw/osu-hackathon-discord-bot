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
export interface IChannel extends INameableGuildItem {
  /**
   * Channel specific traits.
   */
  type: string[];
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

/**
 * Login token for Discord dashboard.
 */
export interface IUserToken {
  /**
   * User's Discord ID.
   */
  userId: string;

  /**
   * Token used to login.
   */
  token: string;
}

/**
 * Types of data in the database.
 */
export type DatabaseColumnTypes = string | number | boolean | Date | string[] | number[];

/**
 * Filter object used to limit queries.
 */
export interface IQueryFilter {
  [key: string]: DatabaseColumnTypes | DatabaseColumnTypes[] | Record<string, DatabaseColumnTypes | DatabaseColumnTypes[]>;
}
 
/**
 * Projection on queries to limit columns.
 */
export type IQueryProjection = Record<string, number> | string | string[];
 
/**
 * Update object used to update data in the database.
 */
export interface IUpdateQuery {
  [key: string]: DatabaseColumnTypes | Record<string, DatabaseColumnTypes>;
} 

export interface IDataAccessObject<T> {
  create: (...args: any[]) => Promise<T>;

  findOne: (
    filter?: IQueryFilter,
    projection?: IQueryProjection,
  ) => Promise<T | null>;

  find: (
    filter?: IQueryFilter,
    projection?: IQueryProjection,
  ) => Promise<T[]>;

  findById: (id: string) => Promise<T | null>;

  delete: (filter?: IQueryFilter) => Promise<number>;

  deleteById: (id: string) => Promise<boolean>;

  updateOne: (
    filter?: IQueryFilter,
    update?: IUpdateQuery,
    insertNew?: boolean,
  ) => Promise<boolean>

  updateMany: (
    filter?: IQueryFilter,
    update?: IUpdateQuery,
    insertNew?: boolean,
  ) => Promise<number>;
}
