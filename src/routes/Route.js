import React from "react"

const Home = React.lazy((_) => import("../pages/Home"))
const Post = React.lazy((_) => import("../pages/Post"))
const NoMatch = React.lazy((_) => import("../pages/NoMatch"))

const publicRoutes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/post/:id",
    component: Post,
    exact: true,
  },
  {
    component: NoMatch,
  },
]

const routes = [...publicRoutes]

export { routes }
