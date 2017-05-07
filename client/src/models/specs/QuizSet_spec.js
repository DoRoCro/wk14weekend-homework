import QuizSet from './QuizSet'
import QuestionList from './QuestionList'
import Person from './' 
var assert = require('assert')
var quizSet

describe('guess who Quiz Set people and relevant questions', function () {
  beforeEach(function () {
    quizSet = new QuizSet(, ['q1','q2','q3','q4'])
  })

  it('has people', function() {
    assert.strictEqual(2, quizSet.people.length)
  })
  it('has questions', function() {
    assert.strictEqual(3, questionList.questions)
  })
  it('has question3', function() {
    assert.strictEqual('question3', questionList.question3)
  })
})