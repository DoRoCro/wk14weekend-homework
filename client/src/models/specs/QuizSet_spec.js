import QuizSet from '../QuizSet'
import QuestionList from '../QuestionList'
import Person from '../Person'
var assert = require('assert')
var quizSet

describe('guess who Quiz Set', function () {
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

  it('can have a title', function() {
    quizSet.setTitle('QuizSetTitle to display')
    assert.strictEqual('QuizSetTitle to display', quizSet.title)
  })

  it('can fillData with default set', function() {
    quizSet.people = []
    quizSet.questions = []
    quizSet.fillData()
    assert.strictEqual('Star Wars Characters Quiz', quizSet.title)
    assert.strictEqual(3, quizSet.people.length)
    assert.strictEqual(3, quizSet.questions.length)
  })

})
