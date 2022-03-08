# OSU Hackathon Club: Discord Bot

The Discord bot maintains a websocket connection with Discord, handling various events and commands it's passed.

The current implementation uses [discord.js](https://discord.js.org/#/docs/discord.js/stable/general/welcome), an npm library that handles connecting to and making [Discord API](https://discord.com/developers/docs/intro) requests, providing an object-oriented interface to work with Discord.

# Table of Contents

- [Scope](#scope)
- [Usage](#usage)

# Scope

While commands are used for club members, the [web client]() is used by officers to create hackathons, manage members, and other various tasks.

This is due to two reasons.

### I. Long Command Lists

It's possible to lock out commands for only certain roles, but they still appear greyed out for everyone else.

This results in a long list of commands all members would have to scroll through to find what they're looking for.

### II. Creating Items

A web client allows offericers to create items through forms, rather than a long string of parameters after slash commands.

This would make managing the Discord difficult, and entirely unnessisary as we can simply share a database between the two.

# Usage

After you've clone the repository, you'll need to install all the dependencies.

Within the `discord-bot` directory, run the following in your terminal:

```
$ npm install
```

This will create a folder called `node_modules`.

After that you will need to make a new file in the `discord-bot` directory named `.env`.

This is where we store environment variables and secrets. It's automatically ignored by Github, so anything you put in here is safe.

There's an `example.env` in the `discord-bot` directory that you can copy and past into your `.env`. You'll have to contact Andrew Young about specific values.

After that you're all set to start the bot using the following command in the `discord-bot` directory:

```
$ npm run start
```

This script will automatically restart if updates are made.

There are some more scripts that will be helpful as you develop, such as linting.

```
$ npm run lint:fix
```

This command will check for any style guide issues and fix them if possible, or warn you if they can't be fixed automatically.

The repository is setup to disallow pull requests that have linting errors, so it's easist to run this every once and a while as you code.
