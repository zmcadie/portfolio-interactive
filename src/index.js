import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CharacterCustomization from './pages/CharacterCustomization'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Index = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/character" component={CharacterCustomization} />
      </div>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
