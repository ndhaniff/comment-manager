import React from "react"
import styled from "styled-components"
import useInput from "../hooks/UseInput"

const SearchWrapper = styled.div`
  padding: 10px 15px;
  background: #eee;
  border-radius: 5px;
  margin: 0 15px;
  &,
  .grid {
    display: flex;
    .col {
      padding: 0 10px;
    }
    .col input {
      height: 25px;
      width: 100%;
    }
  }
  button {
    padding: 5px 20px;
    border: none;
    border-radius: 3px;
    background: navy;
    color: white;
  }
`

function Search({ onSearch }) {
  const [email, setEmail, emailInput] = useInput({ type: "text", placeholder: "Email" })
  const [message, setMessage, messageInput] = useInput({ type: "text", placeholder: "Message" })
  const [name, setName, nameInput] = useInput({ type: "text", placeholder: "Name" })

  const search = () => {
    onSearch(name, email, message)
    clearInput()
  }

  const clearInput = () => {
    setEmail("")
    setMessage("")
    setName("")
  }

  return (
    <SearchWrapper>
      <div className="grid">
        <div className="col">{nameInput}</div>
        <div className="col">{emailInput}</div>
        <div className="col">{messageInput}</div>
      </div>
      <div>
        <button onClick={search}>Filter</button>
      </div>
    </SearchWrapper>
  )
}

export default Search
