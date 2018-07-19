# loremize

[![Build Status](https://travis-ci.org/Kaishiyoku/js-simple-logger.svg?branch=master)](https://travis-ci.org/Kaishiyoku/js-simple-logger)
[![npm version](https://badge.fury.io/js/js-simple-logger.svg)](https://www.npmjs.com/package/js-simple-logger)

Simple JavaScript console logger.

Table of contents
=================
* [Installation](#installation)
* [Usage](#usage)
* [Breaking changes](#breaking-changes)
* [License](#license)
* [Author](#author)

Installation
============
`npm install --save js-simple-logger`

Usage
=====

Simple logger
-------------
```javascript
import * as Logger from 'js-simple-logger';

const logger = Logger.getLogger();
logger.trace('message');
logger.debug('message');
logger.table([1, 2, 3]);
logger.info('message');
logger.log('message');
logger.warn('message');
logger.error('message');
```

Contextual logger
-----------------
```javascript
import * as Logger from 'js-simple-logger';

const logger = Logger.getLogger('myFunc');
logger.debug('message');
```

setDateFormat
-------------
Use this function before creating any loggers:

```javascript
import * as Logger from 'js-simple-logger';

Logger.setDateFormat('mm:ss');
```

setMinimumLogLevel
------------------
Use this function before creating any loggers:

```javascript
import * as Logger from 'js-simple-logger';

Logger.setMinimumLogLevel(Logger.getLogLevels().TRACE);
```

Available log levels:
- TRACE (0)
- DEBUG (1)
- TABLE (2)
- INFO (3)
- LOG (4)
- WARN (5)
- ERROR (6)

setFormatter
------------
Use this function before creating any loggers:

```javascript
import * as Logger from 'js-simple-logger';

Logger.setFormatter((metaInformation = {}) => (messages) => {
  const {dateFormat, logLevel, context} = metaInformation;
  
  return [Logger.formatLogLevel(logLevel), context].concat(messages);
});
```

Breaking changes
================

1.x.x > 2.x.x
-------------

Instead of `new Logger()` you create a new logger by using `getLogger()`.

License
=======
MIT (https://github.com/Kaishiyoku/js-simple-logger/blob/master/LICENSE)


Author
======
Twitter: [@kaishiyoku](https://twitter.com/kaishiyoku)  
Website: www.andreas-wiedel.de
