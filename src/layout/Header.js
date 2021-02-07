import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`
  padding: 10px 20px;
  border-bottom: solid 1px #ccc;
  span {
    font-weight: bold;
  }
  .brand-name {
    font-size: 1.3rem;
    text-decoration: none;
    color: navy;
  }
`

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <div className="brand">
          <Link to="/" className="brand-name">
            Comment<span>Manager</span>
          </Link>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
