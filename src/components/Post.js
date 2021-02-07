import React from "react"
import styled from "styled-components"

const PostDiv = styled.div`
  padding: 10px;
  border: solid 1px #ddd;
  margin: 1rem;
  min-height: 200px;
  .title {
    font-weight: bold;
    padding-bottom: 1rem;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      color: navy;
    }
  }
`

const Post = (props) => {
  return (
    <PostDiv className="post">
      <h2 onClick={props.onClick} className="title">
        {props.post.title}
      </h2>
      <p className="body">{props.post.body}</p>
    </PostDiv>
  )
}

export default Post
