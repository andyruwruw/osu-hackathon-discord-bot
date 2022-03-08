# OSU Hackathon Club: Discord Bot

The discord bot maintains a connection to Discord, passing events to various handlers, and registering commands as needed.

While commands are used for club members to access data, a web client is used by officers to create data.

This is due to the lack of options of hiding officer commands, making the command list bloated.

A web client also allows officers to create data items through forms, rather than as long string of parameters to commands.

You'll find a large number of functions and classes are also pulled from the shared directory, such as types and general helpers.
