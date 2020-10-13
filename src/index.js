import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

import { ThemeProvider } from "emotion-theming"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{ bg: "red", bg2: "gold" }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
