import QuestionList from './QuestionList'
import Person from './Person'

class QuizSet {
  constructor (people, questions) {
    this.people = people
    this.questions = questions
  }

  setTitle (title) {
    this.title = title
  }

}

module.exports = QuizSet
