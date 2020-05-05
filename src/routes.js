import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Pitch from './pages/Pitch'
import Video from './pages/Video'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pitch" exact component={Pitch} />
                <Route path="/video" exact component={Video} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;