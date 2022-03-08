# Custom Errors

This directory contains custom errors for ease of use.

```javascript
// Use
throw new UsedAbstractHandlerError();

// Instead of
throw new Error('Attempted to use Abstract Handler, use a concrete implementation instead.');
```

Each error overrides the message parameter with a preset message for the specific error.

Not too much special going on here, but if you're throwing an error, you can define it here first.

See the other errors as an example of how to set them up:

```
// Local Imports
import { MESSAGE_USED_ABSTRACT_HANDLER_ERROR } from '../config/messages';

/**
 * Abstract Handler Class Used Error.
 */
export class UsedAbstractHandlerError extends Error {
  constructor() {
    super(MESSAGE_USED_ABSTRACT_HANDLER_ERROR);
  }
}
```

Add the error message to [src/config/messages](), and import it. This gives us a single place to edit and import console messages.
