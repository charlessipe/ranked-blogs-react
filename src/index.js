import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import onlineMarketing from './onlineMarketing';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route} from 'react-router-dom';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export default () =>
  (<BrowserRouter>
    <Route path="/" exact component={App} />
    <Route path="/online-marketing" exact component={onlineMarketing} />
  </BrowserRouter>);
