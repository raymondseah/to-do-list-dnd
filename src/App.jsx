/* eslint-disable no-unused-vars */

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoList from './components/todopage'


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={TodoList} />

      </Router>


    </div>
  );
}

export default App;
