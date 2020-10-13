import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

const AppWrapper = styled.div`
  label: test-component;
  background-color: ${({ theme }) => theme.bg};
`
const styling = theme => css`
  label: test-c2-omponent;
  background-color: ${theme.bg2};
`

function App() {
  return (
    <AppWrapper>
      <h1>Test</h1>
      <header css={styling}>header</header>
    </AppWrapper>
  )
}

export default App
