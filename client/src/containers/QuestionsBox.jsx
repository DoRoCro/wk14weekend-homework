import React from 'react'
import Selector from '../components/Selector'

class QuestionsBox extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    console.log(this.props)
    // const answers = this.props.candidates.answers.map( (answer, index) => {
    //   return 
    // })
    const selectors = this.props.questions.map((question, index) => {
      return (
        <span id={question}> {question} 
          <Selector id={index} key={index} options={this.props.candidates[index].answers} />
        </span>
      )
    })

    return (
      <div>
        {selectors}
      </div>
    )
  }
}

export default QuestionsBox
