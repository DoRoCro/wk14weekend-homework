import React from 'react'

class Selector extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    // generate options from props
    const options = this.props.options.map( (option, index) => {
      return (
        <option value={index} key={index}>{option}</option>
      )
    })

    return (
      <select>
        {options}
      </select>
    )
  }
}

export default Selector
