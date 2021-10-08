import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from './pages/Nav';
import DashBoard from './pages/DashBoard';
import Stock from './pages/Stock';
import Forex from './pages/Forex';
import Crypto from './pages/Crypto';
import News from './pages/News';

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/stock" component={Stock} exact />
                    <Route path="/stock/:symbol" component={Stock} />
                    <Route path="/forex" component={Forex} />
                    <Route path="/crypto" component={Crypto} />
                    <Route path="/news" component={News} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
