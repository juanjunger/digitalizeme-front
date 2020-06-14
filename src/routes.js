import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Pitch from './pages/Pitch'

import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pitch" exact component={Pitch} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes