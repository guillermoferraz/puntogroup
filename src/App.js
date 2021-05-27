import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';

import Navbar from './components/navbar';
import Works from './components/works';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/works" component={Works}/>
            </Switch>
    </Router>
  );
}

export default App;
