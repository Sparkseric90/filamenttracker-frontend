import './App.css';
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


export default function App() {


  return (
    <div className="App container">
      <Router>
        <Switch>
          <Route exact={true} path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}