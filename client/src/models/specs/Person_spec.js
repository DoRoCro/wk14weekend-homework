/* eslint-env mocha */
var Person = require('../Person')
var assert = require('assert')
var person

describe('guess who Person', function () {
  beforeEach(function () {
    person = new Person('name', 'https://test_img', 'answer1', 'answer2', 'answer3')
  })

  it('it has name', function () {
    assert.strictEqual('name', person.name)
  })

  it('it has a img URL', function () {
    assert.strictEqual('https://test_img', person.imgUrl)
  })

  it('it has answer to question1', function () {
    assert.strictEqual('answer1', person.answer1)
  })

  it('it has answer to question2', function () {
    assert.strictEqual('answer2', person.answer2)
  })

  it('it has answer to question3', function () {
    assert.strictEqual('answer3', person.answer3)
  })
})
