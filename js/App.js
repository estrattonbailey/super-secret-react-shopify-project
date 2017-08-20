import React from 'react'
import { Link, Route } from 'react-router-dom'
import Product from 'Pages/Product'

export default function App (props) {
  return (
    <div>
      <h1>Reactify</h1>
      <div className='px1'>
        <Link to='/products/navy-liberty-splatter-ball-cap'>navy-liberty-splatter-ball-cap</Link>

        <Route path='/products/:slug' component={Product} />
      </div>
    </div>
  )
}
