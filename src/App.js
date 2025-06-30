import Home from './components/Home'
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Different forms:

import USForm from './components/pages/USForm';
import EUForm from './components/pages/EUForm';
import AUForm from './components/pages/AUForm';
import CAForm from './components/pages/CAForm';
import NotFound from './components/pages/NotFound';
import GtmTest from './components/pages/GtmTest';
import NonGtmTest from './components/pages/NonGtmTest';
import Widget from './components/pages/Widget'
 
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
          <Route path="/gtm-test" component={GtmTest} />
          <Route path="/non-gtm-test" component={NonGtmTest} />
          <Route path="/widget" component={Widget} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
