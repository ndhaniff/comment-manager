import React from "react"
import styled from "styled-components"

import loadingGif from "../assets/imgs/loading.gif"

const LoaderWrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Loader() {
  return (
    <LoaderWrapper>
      <img src={loadingGif} alt="" />
    </LoaderWrapper>
  )
}

export default Loader
