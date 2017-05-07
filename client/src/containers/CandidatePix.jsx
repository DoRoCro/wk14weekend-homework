import React from 'react'
class CandidatePix extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const pix = this.props.candidates.map( (candidate, index) => {
      return (
        <img id={candidate.name} key={index} src={candidate.imgUrl} className='candidate-picture' alt={candidate.name} />
      )
    })
    return (
      <div>
        {pix}
      </div>
    )
  }
}

export default CandidatePix
