/* eslint-env mocha */
var Person = require('../Person')
var assert = require('assert')
var person

describe('guess who Person', function () {
  beforeEach(function () {
    person = new Person('name', 'https://test_img', ['answer1', 'answer2', 'answer3'])
  })

  it('it has name', function () {
    assert.strictEqual('name', person.name)
  })

  it('it has a img URL', function () {
    assert.strictEqual('https://test_img', person.imgUrl)
  })

  it('it has answer to question1', function () {
    assert.strictEqual('answer1', person.answers[0])
  })

  it('it has answer to question2', function () {
    assert.strictEqual('answer2', person.answers[1])
  })

  it('it has answer to question3', function () {
    assert.strictEqual('answer3', person.answers[2])
  })
})
