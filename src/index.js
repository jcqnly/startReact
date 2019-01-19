import React from "react"
import ReactDOM from "react-dom"
import Walk from "./Walk"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Walk />,
  document.getElementById('root')
)

serviceWorker.unregister();