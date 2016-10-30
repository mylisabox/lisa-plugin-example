'use strict'
/* global describe, it */

const assert = require('assert')

describe('Plugin', () => {
  let plugin
  before(() => {
    plugin = global.app.packs.pluginsManager['example']
  })

  it('should exist', () => {
    assert(plugin)
  })
})
