import FormCapture from './components/FormCapture'
import CustomForm from './components/CustomForm'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FormCapture} />
          <Route path="/join" component={CustomForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
