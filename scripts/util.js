const fs = require('fs')
const path = require('path')
const PACKAGES_DIR = path.resolve(__dirname, '../packages')

module.exports.workspaces =
  fs
    .readdirSync(PACKAGES_DIR)
    .map((file) => path.resolve(PACKAGES_DIR, file))
    .filter((f) => fs.lstatSync(path.resolve(f)).isDirectory()) || []
