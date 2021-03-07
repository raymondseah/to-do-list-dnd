/* eslint-disable no-unused-vars */

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoList from './components/todopage'
import Createtask from './components/createtaskform'

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/create" component={Createtask} />
          <Route path="/" component={TodoList} />
        </Switch>


      </Router>


    </div>
  );
}

export default App;
