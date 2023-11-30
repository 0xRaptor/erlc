exports.config = {}

exports.test = require('./functions/test.js')
exports.getServer = require('./functions/server/getServer.js')
exports.runCommand = require('./functions/server/runCommand.js')

exports.Client = require('./classes/client.js')