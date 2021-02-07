import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../services/backend"
import { default as PostComponent } from "../components/Post"
import Comment from "../components/Comment"
import Search from "../components/Search"
import Loader from "../components/Loader"
import fuzzy from "../utils/Fuzzy"

function Post(props) {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)
  const [commentsResult, setCommentsResult] = useState(null)
  const [commentsLoading, setCommentsLoading] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getPost() {
      try {
        let response = await get(`posts/${id}`)
        let postComments = await get(`comments?postId=${id}`)
        setPost(response)
        setComments(postComments)
        setCommentsResult(postComments)
        setLoading(false)
      } catch (error) {
        // console.log(error.toString())
        setLoading(false)
        throw new Error("Error getting posts")
      }
    }
    getPost()
  }, [id])

  const search = (name, email, message) => {
    setCommentsLoading(true)
    setTimeout(() => {
      setCommentsResult(
        comments.filter(
          (cmt) => fuzzy(name, cmt.name) && fuzzy(email, cmt.email) && fuzzy(message, cmt.body)
        )
      )
      setCommentsLoading(false)
    }, 1200)
  }

  return !loading ? (
    <div>
      <div>
        <PostComponent post={post}></PostComponent>
      </div>

      <div className="comment-section">
        <Search onSearch={search}></Search>
        {!commentsLoading ? (
          commentsResult.map((comment, idx) => <Comment key={idx} comment={comment}></Comment>)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Post
