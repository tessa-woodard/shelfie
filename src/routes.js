import React from 'react'
import { Switch, Route } from "react-router-dom"
import Dash from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'

export default (
    <Switch>
        <Route exact path="/" component={Dash} />
        <Route path="/add" component={Form} />
        <Route path="/edit/:id" component={Form} />
    </Switch>
)
