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

  fillData () {
    // TEST/DEVELOPMENT DATA SET
    this.setTitle('Star Wars Characters Quiz')
    this.questions = [
      'uses the Dark Side',
      'is a Droid',
      'favourite weapon'
    ]
    this.people = [
      new Person('Darth Vader', 
        'https://s-media-cache-ak0.pinimg.com/736x/23/69/60/236960ec5800a56e2b6fab97441dd691.jpg',
        [
          true,
          false, 
          'red light sabre']),
      new Person('Yoda', 
        'https://vignette2.wikia.nocookie.net/starwars/images/4/45/Yoda.jpg/revision/latest?cb=20080121004032',
        [
          false,
          false, 
          'mangled syntax']),
       new Person('Han Solo', 
         'http://assets.nydailynews.com/polopoly_fs/1.2960325.1485875503!/img/httpImage/image.jpg_gen/derivatives/article_750/solo1f-1-web.jpg',
         [
           false,
           false, 
           'blaster'])
    ]
  }
}

export default QuizSet
