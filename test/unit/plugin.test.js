'use strict'
/* global describe, it */

const assert = require('assert')

describe('Plugin', () => {
  let plugin
  before(() => {
    plugin = global.app.packs.pluginsManager.plugins['example']
  })

  it('should exist', () => {
    assert(plugin)
  })
})
