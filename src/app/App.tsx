import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Layout } from 'App/containers/Layout/Layout'
// import { Redirect, Route, Switch } from 'react-router-dom'

export const App = hot(module)(() => (
    <>
        <Layout />
    </>
    // <Switch>
    //     <Redirect exact from="/" to="/main" />
    //     <Route path="/main" component={Layout} />
    //     {/* <Redirect from="*" to="/main/" />               */}
    // </Switch>
))
