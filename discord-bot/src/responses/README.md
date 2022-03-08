# Responses

This directory defines the bot's message responses to certain events or commands.

Messages are complex as they could include files, embeds, attatchements, components and dynamic content.

By defining an [abstract response class](), all these pieces are generated through virtual functions, allowing concrete implementations to override them to define unique behaviors.

The response class then handles converting these to a JSON discord accepts as a message object.
