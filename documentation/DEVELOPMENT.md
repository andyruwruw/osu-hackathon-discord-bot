# Developers Guide

Hey coders, this guide should help you get started making your own changes to the bot! Glad to have you here.

I'll be sure to add any contributers to the [README.md](https://github.com/andyruwruw/osu-hackathon-discord-bot#readme) so everyone can get credit and hopefully add this to their portfolio!

Please let me know if you have any questions. I'm on the Discord server as **andyruwruw**.

# Table of Contents

- [Usage](#usage)
- [Basics Notes](#basics-notes)
  - [Typescript](#typescript)
  - [Style Guide](#style-guide)
  - [Database](#database)
- [Directory Guide](#directory-guide)

# Usage

This short tutorial should get you from cloning the repository to running the bot on your local machine.

Note all the code snippets should be run from command line in the repositories root directory.

FIrst install dependencies:

```
$ npm i
```

You'll need to create a file named `.env` in the root directory. This file is automatically ignored by git and is where we store information related to the running environment, or secrets we wouldn't post to Github.

There's an [example.env](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/example.env) to help you know what properties you'll need. For specific values, contact *Andrew Young*.

Start the bot with the following command:

```
$ npm run start
```

This automatically builds the server from typescript to javascript and runs it using [nodemon](https://www.npmjs.com/package/nodemon), which will restart the server if any changes are saved.

The repository follows a style guide and has support for tests once we get the time to write them. It's best to keep up with linting errors before submitting a pull request.

The following command will show you any linting errors:

```
$ npm run lint
```

Many errors are small and can be handled by [eslint](https://www.npmjs.com/package/eslint). To fix small errors and just be shown errors that require a bit more intervention, run:

```
$ npm run lint:fix
```

All pull requests and pushes to main will be checked for linting and tests by Github using [Github Actions](https://github.com/andyruwruw/osu-hackathon-discord-bot/actions).

# Basics Notes

These are general notes to help you get started!

- [Typescript](#typescript)
- [Style Guide](#style-guide)
- [Database](#database)

# Typescript

The bot is written in [Typescript](https://www.typescriptlang.org/), which if you're unfamiliar that's basically just Javascript painfully strongly typed.

That means you have to give every variable a type. While it might suck, it makes things easier to maintain.

Here's an example of a simple function written in Javascript vs. Typescript.

```
# Javascript
function main(
  parameter1,
  parameter2,
) {
  return 0;
}

# Typescript
function main(
  parameter1: string,
  parameter2: number,
): number {
  return 0;
}
```

For simplicity, most of the definitions are defined and imported from [src/types/index.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/types/index.ts)

Typescript is super easy to learn if havn't work with it before! Here's a [tutorial from the Typescript website](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

# Style Guide

I love good looking code, and follow [Airbnb's Javascript Style Guide](https://airbnb.io/javascript/) for almost all my javascript projects. There are a few rules that can get tedious, but usually result in clean readable code.

## Eslint

We have a dependency called [eslint](https://eslint.org/), which checks the repository for any errors using Airbnb's style guide.

Anytime you make a pull request, [Github Actions](https://github.com/andyruwruw/osu-hackathon-discord-bot/actions) will check your code for linting errors (style guide violations) and prevent the merge until their dealt with!

You can use eslint locally using:

```
$ npm run lint:fix
```

Best to do this as you code, so you don't have to deal with tons of errors at the end.

*I wouldn't bother using `npm run lint`, but opt for `npm run lint:fix` just to take out any violations that the script can fix itself.*

I follow a few other rules in my own coding.

## Documentation

Document every class, class variable and function! I use [JSDoc](https://jsdoc.app/about-getting-started.html). It should be pretty explanitory if you look at some of the other documentation. I don't really bother with comments within functions unless things get complicated.

```
/**
 * Finds a subcommand by name.
 *
 * @param {string} name Name of the subcommand.
 * @returns {Command | null} Subcommand if found, null otherwise.
 */
getSubCommand(name: string): Command | null {
```

## Private Variables and Functions

I try to encapsulate most of my work in classes. Allows me to stay organized, inherit, and pass less parameters.

Any class variables or functions that I don't plan on being called externally, I name with an **underscore** at the start.

I try to use `get` and `set` functions as much as possible.

```
class Channel {
  _id: string;

  _privateFunction(): void {

  }

  getId(): string {
    return this._id;
  }
}
```

Javascript itself doesn't actually have private variables or functions, so it's up to us to avoid using anything we've declared private.

# Database

The bot requires a database for persistant data, such as member, hackathon and project details.

I can't be bothered writing SQL, so I opted for [MongoDB](https://www.mongodb.com/), a NoSQL database. We'll be using a free instance from [MongoDB's Atlas](https://www.mongodb.com/atlas). It's free, but not the fastest.

For testing purposes, I built out a psudo-database that's called the [cache database](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/cache-database). If you can't be bothered spinning up MongoDB on your local machine, the cache Database should be fine.

The cache database holds all data in memory, meaning as soon as you stop the script it will get whiped. It's particularly useful for tests that shouldn't actually change data.

You can pick between the two databases using the **.env** file described in the [Usage](#usage) section.

```
# In your .env

DATABASE_TYPE=mongodb
```

It can be set to `mongodb` or `cache`, but defaults to the cache database. So leaving it out works as well.

You shouldn't have to interact much with the database, as I already wrote [data access objects](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/mongo-database/daos) for each object.

The data access objects act as a facade for any communication with the database.

# Directory Guide

- [.github](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/.github/workflows): This directory defines our Github Actions.
- [documentation](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/documentation): Any markdown besides the README.md.
- [node_modules](#): Locally installed dependencies.
- [src](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src)
  - [commands](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/commands)
  - [config](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/config/index.ts): Exports constant values.
  - [database](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database)
    - [cache-database](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/cache-database)
      - [daos](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/cache-database/daos): Data access objects for cache database tables.
      - [index.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/database/cache-database/index.ts): Concrete implemenation of database class for memory database.
    - [mongo-database](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/mongo-database)
      - [daos](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/mongo-database/daos): Data access objects for MongoDB tables.
      - [models](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/database/mongo-database/models): Schema definitions for MongoDB.
      - [index.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/database/mongo-database/index.ts): Concrete implemenation of database class for MongoDB.
    - [database.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/database/database.ts): Abstract database class.
    - [index.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/database/index.ts): Exports function for retrieving a concrete database class.
  - [errors](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/errors): Excessive custom error classes.
  - [helpers](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/helpers): That drawer you put miscellaneous things in.
  - [responses](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/src/responses)
  - [types](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/types/index.ts): Exports typescript definitions.
  - [discord-bot.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/discord-bot.ts): Main bot client class.
  - [index.ts](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/src/index.ts): Main script, starts bot.
- [test](https://github.com/andyruwruw/osu-hackathon-discord-bot/tree/main/test): Jest test suites.
- [.env](#): Environmental variables.
- [.eslintrc.json](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/.eslintrc.json): Tells eslint what rules to enforce.
- [.gitignore](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/.gitignore): Files Github should ignore.
- [example.env](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/example.env): Example .env without secret values.
- [jest.config.js](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/jest.config.js): Config for tests.
- [nodemon.json](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/nodemon.json): Config for nodemon, which runs our script for development.
- [package.json](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/package.json): Lists dependencies.
- [tsconfig.json](https://github.com/andyruwruw/osu-hackathon-discord-bot/blob/main/tsconfig.json): Config for converting typescript.
