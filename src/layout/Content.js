import React from "react"

import styled from "styled-components"

const ContentContainer = styled.div`
  max-width: 680px;
  margin: auto;
  padding: 2rem;
`

function Content(props) {
  return <ContentContainer>{props.children}</ContentContainer>
}

export default Content
