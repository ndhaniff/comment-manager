import React from "react"
import styled from "styled-components"

const CommentWrapper = styled.div`
  padding: 10px 20px;
  border-bottom: solid 1px #ddd;
  .body {
    margin: 5px 0;
  }
`

function Comment({ comment }) {
  return (
    <CommentWrapper>
      <div className="name">
        <b>Name:</b> {comment.name}
      </div>
      <div className="email">
        <b>Email:</b> {comment.email}
      </div>
      <div className="body">{comment.body}</div>
    </CommentWrapper>
  )
}

export default Comment
