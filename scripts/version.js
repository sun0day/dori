const { join } = require('path')
const { inc } = require('semver')
const { sync } = require('glob')
const { writeJson } = require('fs-extra')
const args = process.argv.slice(2)

const bump = (workspaces, version, ...params) => {
  const [releaseType, preid] = params
  if (!releaseType)
    throw new Error('please set version release type')

  const root = process.cwd()
  const nextVersion = inc(version, releaseType, preid || 'beta')

  workspaces.reduce((files, ws) => {
    return files.concat(sync(join(root, ws)).map(dir => join(dir, 'package.json')))
  }, []).forEach((pkg) => {
    const json = require(pkg)

    json.version = nextVersion
    writeJson(pkg, json, { spaces: 2 })
  })
}

bump(['packages/*', './'], require('../package.json').version, ...args)
