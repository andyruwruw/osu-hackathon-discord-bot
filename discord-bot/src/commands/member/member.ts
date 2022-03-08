// Packages
import { ApplicationCommandOptionData } from 'discord.js';

// Local Imports
import { Command } from '../command';
import {
  APPLICATION_COMMAND_OPTION_TYPES,
  APPLICATION_COMMAND_TYPES,
} from '../../config';

const OPTIONS = [
  {
    type: APPLICATION_COMMAND_OPTION_TYPES.USER,
    name: 'user',
    description: 'The member\'s discord name.',
    required: true,
  },
] as ApplicationCommandOptionData[];

/**
 * Gets a club member's profile.
 */
export class MemberCommand extends Command {
  /**
   * Instantiates a new MemberCommand.
   */
  constructor() {
    super(
      'Get Member Profile',
      'member',
      'Get a club member\'s profile',
      APPLICATION_COMMAND_TYPES.CHAT_INPUT,
      false,
      OPTIONS,
    );
  }
}
