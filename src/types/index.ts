interface IDatabaseModel {
  id: string;
}

interface IGuildItem extends IDatabaseModel {
  guildId: string;
}

interface INameableGuildItem extends IGuildItem {
  name: string;
}

interface IDescribableGuildItem extends INameableGuildItem {
  description: string;
}

export interface IChannel extends IGuildItem {
  isCommandChannel: boolean;
  isAdminCommandChannel: boolean;
  isErrorLog: boolean;
}

export interface IGuild extends IDatabaseModel {}

export interface IHackathon extends INameableGuildItem {
  theme: string;
  start: Date;
  end: Date;
  participants: number;
  prizePool: number;
  prizeIds: string[];
}

export interface IMember extends IGuildItem {}

export interface IMessage extends IGuildItem {
  isRoleAssigner: boolean;
  roleAssignments: string[];
}

export interface IPrize extends IDescribableGuildItem {
  index: number;
}

export interface IProject extends IDescribableGuildItem {
  hackathonId: string;
  imageUrl: string;
  userIds: string[];
  liveUrl: string;
  demoUrl: string;
  prizeId: string;
}

export interface IRole extends INameableGuildItem {
  color: string;
  isOfficer: boolean;
  isPresident: boolean;
  isVicePresident: boolean;
  isParticipant: boolean;
  participantSeasonIndex: number;
  isOverallPrizeWinner: boolean;
  isNewStudentPrizeWinner: boolean;
  isGradStudentAlumniPrizeWinner: boolean;
  prizeIndex: number;
  isPronouns: boolean;
  pronounType: string;
}
