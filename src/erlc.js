exports.config = {}

exports.getBans = require('./functions/server/getBans.js')
exports.getCommandLogs = require('./functions/server/getCommandLogs.js')
exports.getJoinLogs = require('./functions/server/getJoinLogs.js')
exports.getKillLogs = require('./functions/server/getKillLogs.js')
exports.getModcallLogs = require('./functions/server/getModcallLogs.js')
exports.getPlayers = require('./functions/server/getPlayers.js')
exports.getServer = require('./functions/server/getServer.js')
exports.getQueue = require('./functions/server/getQueue.js')
exports.runCommand = require('./functions/server/runCommand.js')

exports.Client = require('./classes/client.js')