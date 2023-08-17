import FormCapture from './components/FormCapture'
import CustomForm from './components/CustomForm'
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={FormCapture} />
          <Route path="/custom" component={CustomForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
