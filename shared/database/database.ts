// Local Imports
import { UsedAbstractDatabaseError } from '../errors/used-abstract-database-error';

// Types
import {
  IChannelType,
  IChannel,
  IDataAccessObject,
  IGuild,
  IHackathonParticipation,
  IHackathonPrize,
  IHackathon,
  IMemberRole,
  IMemberToken,
  IMember,
  IMessageRoleAssignment,
  IMessage,
  IPrize,
  IProjectParticipation,
  IProject,
  IRole,
} from '../types';

/**
 * Abstract Database interface, only implement inherited classes.
 */
export class Database {
  /**
   * Data access object for ChannelTypes.
   */
  channelType: IDataAccessObject<IChannelType> = null;

  /**
   * Data access object for Channels.
   */
  channel: IDataAccessObject<IChannel> = null;

  /**
   * Data access object for Guilds.
   */
  guild: IDataAccessObject<IGuild> = null;

  /**
   * Data access object for HackathonParticipations.
   */
  hackathonParticipation: IDataAccessObject<IHackathonParticipation> = null;

  /**
   * Data access object for HackathonPrizes.
   */
  hackathonPrize: IDataAccessObject<IHackathonPrize> = null;

  /**
   * Data access object for Hackathons.
   */
  hackathon: IDataAccessObject<IHackathon> = null;

  /**
   * Data access object for MemberRoles.
   */
  memberRole: IDataAccessObject<IMemberRole> = null;

  /**
   * Data access object for MemberTokens.
   */
  memberToken: IDataAccessObject<IMemberToken> = null;

  /**
   * Data access object for Members.
   */
  member: IDataAccessObject<IMember> = null;

  /**
   * Data access object for MessageRoleAssignments.
   */
  messageRoleAssignment: IDataAccessObject<IMessageRoleAssignment> = null;

  /**
   * Data access object for Messages.
   */
  message: IDataAccessObject<IMessage> = null;

  /**
   * Data access object for Prizes.
   */
  prize: IDataAccessObject<IPrize> = null;

  /**
   * Data access object for ProjectParticipations.
   */
  projectParticipation: IDataAccessObject<IProjectParticipation> = null;
 
  /**
   * Data access object for Projects.
   */
  project: IDataAccessObject<IProject> = null;
 
  /**
   * Data access object for Roles.
   */
  role: IDataAccessObject<IRole> = null;

  /**
   * Connects to database.
   * 
   * @param {string | undefined} [databaseUrl=''] Database URL.
   * @param {string | undefined} [databaseUser=''] Database username.
   * @param {string | undefined} [databasePassword=''] Database password.
   */
  async connect(
    databaseUrl: string = '',
    databaseUser: string = '',
    databasePassword: string = '',
  ): Promise<void> {
    throw new UsedAbstractDatabaseError();
  }

  /**
   * Whether or not the database is connected.
   * 
   * @returns {boolean} Whether or not the database is connected.
   */
  isConnected(): boolean {
    return false;
  }
}
