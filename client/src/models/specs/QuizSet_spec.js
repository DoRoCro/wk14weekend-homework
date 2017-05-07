import QuizSet from '../QuizSet'
import QuestionList from '../QuestionList'
import Person from '../Person'
var assert = require('assert')
var quizSet

describe('guess who Quiz Set people and relevant questions', function () {
  beforeEach(function () {
    quizSet = new QuizSet([
        new Person('name1', 'https://dummy-URL.com', ['Yes', 'Yes', 'No', 'No']),
        new Person('name1', 'https://dummy-URL.com', ['No', 'Yes', 'Yes', 'No'])
      ],
      ['q1', 'q2', 'q3', 'q4']
    )
  })

  it('has people', function () {
    assert.strictEqual(2, quizSet.people.length)
  })
  it('has questions', function () {
    assert.strictEqual(4, quizSet.questions.length)
  })
})
