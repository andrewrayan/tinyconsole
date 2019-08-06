# tinyconsole

A Node.js package that is used to log in console with additional information.

## Usage

First, install the package using npm:

    npm install tinyconsole --save

Then, require the package and use it like so:

    const log = require('tinyconsole');
    // Info : Success message.
    // Logged at Tue Aug 06 2019 18:33:25 GMT+0530 (India Standard Time)
    log.Info('Success message.');

    // Warning : Some warning message.
    // Logged at Tue Aug 06 2019 18:33:25 GMT+0530 (India Standard Time)
    log.Warning('Some warning message.');

    // Error : Some error message.
    // Logged at Tue Aug 06 2019 18:33:25 GMT+0530 (India Standard Time)
    log.Error('Some error message.');

## License

Apache 2.0