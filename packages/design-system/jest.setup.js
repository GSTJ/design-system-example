const timers = require('timers')

global.clearImmediate = timers.clearImmediate
global.setImmediate = timers.setImmediate
