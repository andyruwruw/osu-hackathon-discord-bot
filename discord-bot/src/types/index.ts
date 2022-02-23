// Packages
import {
  Client,
  Guild,
} from 'discord.js';

/**
 * Discord client.
 */
export interface IDiscordBot extends Client {
  getGuilds: () => Promise<Record<string, Guild>>
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
