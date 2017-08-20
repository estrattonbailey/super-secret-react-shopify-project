import React from 'react'
import fetch from 'unfetch'

export default class Product extends React.Component {
  constructor (props) {
    super(props)

    console.log(props)

    this.state = {
      loading: true,
      data: null
    }

    fetch(`/products/${props.match.params.slug}?view=json`).then(r => r.json()).then(r => {
      this.setState({
        loading: false,
        data: r
      })
    })
  }

  render () {
    return (
      <div className='px1'>
        <h3>Data</h3>

        <pre><code>
          {JSON.stringify(this.state.data)}
        </code></pre>
      </div>
    )
  }
}
