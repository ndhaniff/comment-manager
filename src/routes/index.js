import React, { Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { routes } from "./Route"

import Header from "../layout/Header"
import Content from "../layout/Content"

const AppRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component />}></Route>
}

const Routes = (props) => {
  return (
    <BrowserRouter>
      <>
        <Suspense fallback={<div></div>}>
          <>
            <Header />
            <Content>
              <Switch>
                {routes.map((route, idx) => (
                  <AppRoute
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                    key={idx}
                  ></AppRoute>
                ))}
              </Switch>
            </Content>
          </>
        </Suspense>
      </>
    </BrowserRouter>
  )
}

export default Routes
