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

# Usage

Install dependencies:

```
$ npm install
```

You'll need to create a file named `.env` in the root directory. This file is automatically ignored by git. There's an `example.env` to help you know what properties you'll need. For specific values, contact *Andrew Young*.

```
# Discord Registration
DISCORD_BOT_TOKEN=

# MongoDB Access
DATABASE_URL=
DATABASE_USER=
DATABASE_PASSWORD=

# Enable or disable message types
DEBUG=1
WARNING=1
UPDATE=1
```

Start the bot with the following command:

```
$ npm run start
```

`npm run start` automatically builds the server from typescript to javascript and runs it using `nodemon`, which will restart the server if any changes are saved.

It's best to keep up with linting to ensure the code stays clean. You can run:

```
$ npm run lint

or

$ npm run lint:fix
```

This will show you all the linting errors to be fixed. All pull requests and pushes to main will be checked for linting and tests by Github as well.

