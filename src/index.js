import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Desktop1 from './views/desktop1'
import Desktop3 from './views/desktop3'
import Desktop2 from './views/desktop2'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Desktop1} path="/desktop1" />
        <Route exact component={Desktop3} path="/desktop3" />
        <Route exact component={Desktop2} path="/desktop2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
