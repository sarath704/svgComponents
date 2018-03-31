import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SvgBarComponent from './bar/barContainer';
import HourGlassComponent from './hourglass/HourGlassContainer';

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={SvgBarComponent}/>
            <Route path="/hour" component={HourGlassComponent}/>
        </div>
    </Router>

), document.getElementById('root'));
registerServiceWorker();
