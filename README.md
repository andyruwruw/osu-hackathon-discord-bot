# Oregon State Hackathon Club Discord Bot

This bot was specifically built for Oregon State Hackathon Club's Discord server. It allows members to easily answer questions, manages participation and engagement, and helps officers maintain the Discord server.

# Table of Contents

- [Features](#features)
- [Commands](#commands)
- [Usage](#usage)

# Features

- Commands for frequently asked questions.
- Event management.
- Engagement leveling up.
- Dynamic roles for participation.

# Commands

- `/beaverhacks nexthackathon`: Details on the next hackathon.
- `/beaverhacks lvl`: See your engagement level.
- `/beaverhacks list`: List available commands.
- `/beaverhacks ranks`: Available ranks.
- `/beaverhacks userinfo [User]`: See info on user.

# Usage

Install dependencies:

```
$ npm install
```

You'll need to create a file named `.env` in the root directory. This file is automatically ignored by git and is safe for secrets.

There's an `example.env` to help you know what properties you'll need. For specific values, contact *Andrew Young*.

```
# Discord Registration
DISCORD_BOT_TOKEN=

# MongoDB Access
DATABASE_URL=
DATABASE_USER=
DATABASE_PASSWORD=
```

Start the bot with the following command:

```
$ npm run start
```

`npm run start` automatically builds the server from typescript to javascript in a `dist` folder it will create, and then runs the bot.

To build the scripts without running the bot use:

```
$ npm run build
```

To delete an old build (in `dist`):

```
$ npm run clean
```

The script will automatically reload when changes are made. This means if you want to make changes while the bot is running: save your changes, run `npm run build` in a separate terminal tab, and the running process will restart.
