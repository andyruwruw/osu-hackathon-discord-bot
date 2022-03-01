# Custom Errors

This directory contains custom errors for ease of use.

Each error overrides the message parameter with a preset message for the specific error.

Not too much special going on here, but if you are ever using:

```
throw new Error('Some message');
```

You can instead define an error here.

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

You'll have to add the error message to [src/config/messages]()
