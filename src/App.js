import Home from './components/Home'
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Different forms:

import USForm from './components/forms/USForm';
import EUForm from './components/forms/EUForm';
import AUForm from './components/forms/AUForm';
import CAForm from './components/forms/CAForm';
 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/usform" component={USForm} />
          <Route path="/euform" component={EUForm} />
          <Route path="/auform" component={AUForm} />
          <Route path="/caform" component={CAForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
