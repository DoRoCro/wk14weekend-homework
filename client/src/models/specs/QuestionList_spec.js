/* eslint-env mocha */
var QuestionList = require('../QuestionList')
var assert = require('assert')
var questionList

describe('guess who questionList', function () {
  beforeEach(function () {
    questionList = new QuestionList(['question1', 'question2', 'question3'])
  })

  it('has question1', function() {
    assert.strictEqual('question1', questionList.questions[0])
  })
  it('has question2', function() {
    assert.strictEqual('question2', questionList.questions[1])
  })
  it('has question3', function() {
    assert.strictEqual('question3', questionList.questions[2])
  })
})