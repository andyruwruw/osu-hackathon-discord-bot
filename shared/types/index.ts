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
 * Database item with a name.
 */
interface INameable {
  /**
   * Name of the item.
   */
  name: string;
}

/**
 * Database item with a description.
 */
interface IDescribable {
  /**
   * Item description.
   */
  description: string;
}

/**
 * Database item with an image.
 */
interface IImageable {
  /**
   * Item image.
   */
  image: string;
}

/**
 * Database item with an id, and guildId.
 */
interface IGuildItem extends IDatabaseModel {
  /**
   * Unique identifier for the Discord server.
   */
  guild: string;
}

/**
 * Database representation of a Discord server.
 */
export interface IGuild extends IDatabaseModel, INameable, IImageable {
}

/**
 * Database representation of a Discord channel.
 */
export interface IChannel extends IGuildItem, INameable, IDescribable {
  /**
   * Parent channel id.
   */
  parent: string;
}

/**
 * Database representation of a Discord channel's type.
 */
export interface IChannelType {
  /**
   * Id of channel.
   */
  channel: string;

  /**
   * Type of channel.
   */
  type: string;
}

/**
 * Database representation of a hackathon.
 */
export interface IHackathon extends IGuildItem, INameable, IDescribable, IImageable {
  /**
   * Link to banner image.
   */
  banner: string;

  /**
   * End date of the hackathon.
   */
  end: Date;

  /**
   * Link to DevPost Hackathon.
   */
  href: string;

  /**
   * Start date of the hackathon.
   */
  start: Date;
  
  /**
   * Theme of the hackathon.
   */
  theme: string;

  /**
   * Total prize pool amount.
   */
  prizePool: number;
}

/**
 * Database linking table between prizes and hackathons.
 */
export interface IHackathonPrize {
  /**
   * Hackathon the prize is for.
   */
  hackathon: string;

  /**
   * Prize id.
   */
  prize: string;
}

/**
 * Database representation of a hackathon prize.
 */
export interface IPrize extends IGuildItem, INameable, IDescribable {
  /**
   * Index of the prize.
   */
  index: number;
}

/**
 * Database linking table between hackathons and members.
 */
export interface IHackathonParticipation {
  /**
   * Hackathon participated in.
   */
  hackathon: string;

  /**
   * Member id.
   */
  member: string;
}

/**
 * Database representation of a hackathon project.
 */
export interface IProject extends IGuildItem, INameable, IDescribable, IImageable {
  /**
   * Hackathon the project belongs to.
   */
  hackathon: string;

  /**
   * URL to project page.
   */
  href: string;

  /**
   * Live URL with project.
   */
  live: string;

  /**
   * URL to demo video of project.
   */
  demo: string;

  /**
   * URL to project repository.
   */
  github: string;

  /**
   * ID of prize won.
   */
  prize: string;
}

/**
 * Database linking table between projects and members.
 */
export interface IProjectParticipation {
  /**
   * Project participated in.
   */
  project: string;

  /**
   * Member id.
   */
  member: string;
}

/**
 * Database representation of a Discord member.
 */
export interface IMember extends IGuildItem, INameable, IImageable {
  nickname: string;
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
 * Member login tokens
 */
export interface IMemberToken {
  /**
   * Member id.
   */
  member: string;

  /**
   * Login token.
   */
  token: string;
}

/**
 * Database representation of a Discord role.
 */
export interface IRole extends IGuildItem, INameable {
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
 * Database linking table between roles and members.
 */
 export interface IMemberRole {
  /**
   * Member id.
   */
  member: string;

  /**
   * Id of their role.
   */
  role: string;
}

/**
 * Database representation of a Discord message.
 */
export interface IMessage extends IGuildItem {
  type: string;
}

/**
 * Allows messages to assign roles based on emoji reactions.
 */
export interface IMessageRoleAssignment {
  message: string;
  emoji: string;
  role: string;
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
