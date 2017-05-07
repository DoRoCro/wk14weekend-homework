import React from 'react'
import Selector from '../components/selector'
import QuizSet from '../models/QuizSet'
import CandidatePix from '../containers/CandidatePix'
import QuestionsBox from '../containers/QuestionsBox'

class GuessWho extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      quizSets: []
    }
  }

  componentWillMount () {
    // SET UP DATA FOR QUIZ
    // RETRIEVE QUIZSETS FOR GAME TO POPULATE SET SELECTOR
    const defaultQuizSet = new QuizSet([], [])
    defaultQuizSet.fillData()
    this.setState({quizSets: [defaultQuizSet, ...this.state.quizSets] })
    // console.log(this.state)
  }

  render () {

    const quizSetNames = this.state.quizSets.map( (quizset) => {
      return quizset.title
    })
    console.log(this.state, quizSetNames)
    return (
      <div id='guesswho' className='guesswho-container'>
        <h1>GuessWho?</h1>
        <Selector options={quizSetNames} id='game-selector' className='selector' />
        <CandidatePix id='candidate-pix' className='candidate-container' candidates={this.state.quizSets[0].people} />
        <QuestionsBox id='questions-container' className='container' questions={this.state.quizSets[0].questions} candidates={this.state.quizSets[0].people} />
      </div>
    )
  }
}
export default GuessWho
