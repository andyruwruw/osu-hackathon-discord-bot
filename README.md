# Oregon State Hackathon Club Discord Bot

```
This repository is still in development!
```

If anyone is interesting in helping create this bot, see the [Development Guide](./documentation/DEVELOPMENT.md).

This bot was specifically built for Oregon State Hackathon Club's Discord server. It allows members to easily answer questions, manages participation and engagement, and helps officers maintain the Discord server.

# Table of Contents

- [Features](#features)
- [Command List](#command-list)
  - [General Commands](#member-commands)
  - [Admin Commands](#admin-commands)
    - [Set Admin Command Channel](#set-admin-command-channel)
    - [Set Announcements Channel](#set-announcements-channel)
    - [Set General Command Channel](#set-general-command-channel)
    - [Set Welcome Channel](#set-welcome-channel)

# Features

- Commands for frequently asked questions.
- Custom member profiles.
- Hackathon and project details.
- Custom roles for participation.
- Channel management for events.
- Optional censoring of offensive messages.

# Command List

Commands are split into two categories, general commands and admin commands.

Admin commands are only accessable to officers and should make managing the discord server hassle free!

Both sets of commands should have designated command channels as to not clutter general threads.

# General Commands

General commands are free to be run by anyone on the server. While most commands will be locked to a designated command channel, some will be enabled for all channels.

Commands will be registered with Discord so that any user that types `/` will be given a full list of available commands.

## See Next Hackathon

```
/hackathon next
```

## View an Old Hackathon's Details

```
/hackathon archive
```

## Get My Details

```
/me
```

## Get a Member's Details

```
/member @name
```

# Admin Commands

Admin commands are meant only for officers. The first command run should be setting informing the bot which role is the officer role.

These commands are not registered with Discord, and require this documentation. There's no particular way to hide register commands from some users, so this prevents the command list for general users getting cluttered.

These commands will be locked to a designated admin command channel, which should be assigned as soon as possible.

## Set Officer Role

```
/admin set-officer-role @role
```

## Set Admin Command Channel

```
/admin set-admin-command-channel #channel-name
```

## Set Announcements Channel

```
/admin set-announcements-channel #channel-name
```

## Set General Command Channel

```
/admin set-command-channel #channel-name
```

## Set Welcome Channel

```
/admin set-welcome-channel #channel-name
```

## Create Hackathon

```
/admin hackathon create
```

## Edit Hackathon

```
/admin hackathon edit
```

## Generate Hackathon Channels

```
/admin hackathon generate-channels
```

## Announce Hackathon

```
/admin hackathon announce
```

## Create Role Assigner

```
/admin role-assigner #channel
```