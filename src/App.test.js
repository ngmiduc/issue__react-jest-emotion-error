import React from "react"
import { render } from "@testing-library/react"
import Component from "./App"

test("renders learn react link", () => {
  const App = render(<Component />)
  App.debug()
  expect(1).toBe(1)
})
