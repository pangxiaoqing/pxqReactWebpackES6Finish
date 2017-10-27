import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router , Route , browserHistory , IndexRoute } from 'react-router'
import App from './components/app';
import Publish from './components/Publish';
import Home from './components/Home';
import Account from './components/views/Account';
import Authentication from './components/views/Authentication';
import Product from './components/views/Product';




ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Publish}>
            <IndexRoute component={Home} />
            <Route path="/account/:account" component={Account} />
            <Route path="/authentication/:account" component={Authentication} />
            <Route path="/product/:account" component={Product} />
        </Route>
    </Router>
), document.getElementById('app'));