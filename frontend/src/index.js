import * as React from "react"
import { hot } from "react-hot-loader"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware } from "redux"
// import { hot } from "react-hot-loader"
import Home from "./Containers/Home"
import Recipe from "./Containers/Recipe"
import reducers from "./reducers"
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

// Create a router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  }
]);


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

const HotHome = hot(module)(App)

ReactDOM.render(<HotHome />, document.getElementById("home"))