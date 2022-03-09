// Packages
import {
  connect,
  connection,
} from 'mongoose';

// Local Imports
import {
  ChannelType,
  Channel,
  Guild,
  HackathonParticipation,
  HackathonPrize,
  Hackathon,
  MemberRole,
  MemberToken,
  Member,
  MessageRoleAssignment,
  Message,
  Prize,
  ProjectParticipation,
  Project,
  Role,
} from './daos';
import { Monitor } from '../../helpers/monitor';
import { Database } from '../database';
import { DatabaseUrlMissingError } from '../../errors/database-url-missing';
import { MESSAGE_DATABASE_CONNECTION_SUCCESS } from '../../config/messages';

/**
 * Database connection to MongoDB.
 */
export class MongoDatabase extends Database {
  /**
   * Data access object for ChannelTypes.
   */
  channelType: ChannelType;

  /**
   * Data access object for Channels.
   */
  channel: Channel;
 
  /**
   * Data access object for Guilds.
   */
  guild: Guild;
 
  /**
   * Data access object for HackathonParticipations.
   */
  hackathonParticipation: HackathonParticipation;
 
  /**
   * Data access object for HackathonPrizes.
   */
  hackathonPrize: HackathonPrize;
 
  /**
   * Data access object for Hackathons.
   */
  hackathon: Hackathon;
 
  /**
   * Data access object for MemberRoles.
   */
  memberRole: MemberRole;
 
  /**
   * Data access object for MemberTokens.
   */
  memberToken: MemberToken;
 
  /**
   * Data access object for Members.
   */
  member: Member;
 
  /**
   * Data access object for MessageRoleAssignments.
   */
  messageRoleAssignment: MessageRoleAssignment;
 
  /**
   * Data access object for Messages.
   */
  message: Message;
 
  /**
   * Data access object for Prizes.
   */
  prize: Prize;
 
  /**
   * Data access object for ProjectParticipations.
   */
  projectParticipation: ProjectParticipation;
  
  /**
   * Data access object for Projects.
   */
  project: Project;
  
  /**
   * Data access object for Roles.
   */
  role: Role;

  /**
   * Instantiates MongoDatabase with correct queries.
   */
  constructor() {
    super();

    this.channelType = new ChannelType();
    this.channel = new Channel();
    this.guild = new Guild();
    this.hackathonParticipation = new HackathonParticipation();
    this.hackathonPrize = new HackathonPrize();
    this.hackathon = new Hackathon();
    this.memberRole = new MemberRole();
    this.memberToken = new MemberToken;
    this.member = new Member();
    this.messageRoleAssignment = new MessageRoleAssignment();
    this.message = new Message();
    this.prize = new Prize();
    this.projectParticipation = new ProjectParticipation();
    this.project = new Project();
    this.role = new Role();
  }

  /**
   * Connects to database.
   */
  async connect(
    databaseUrl: string = '',
    databaseUser: string = '',
    databasePassword: string = '',
  ): Promise<void> {
    if (!databaseUrl) {
      throw new DatabaseUrlMissingError();
    }

    const authorizedUrl = databaseUrl
      .replace(
        '<user>',
        databaseUser,
      )
      .replace(
        '<password>',
        databasePassword,
      );
    await connect(authorizedUrl);

    Monitor.log(
      MongoDatabase,
      MESSAGE_DATABASE_CONNECTION_SUCCESS,
      Monitor.Layer.UPDATE,
    );
  }

  /**
   * Whether the class is connected to the database.
   *
   * @returns {boolean} Whether the class is connected to the database.
   */
  isConnected(): boolean {
    return connection.readyState === 1;
  }
}
