import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharacterCustomization from './pages/CharacterCustomization'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Redirect to="/p/1" />} />
        <Route path="/p/:position" component={App} />
        <Route path="/character" component={CharacterCustomization} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
