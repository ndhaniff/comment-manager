import React, { useState, useEffect } from "react"
import Post from "../components/Post"
import { useHistory } from "react-router-dom"
import { get } from "../services/backend"
import Loader from "../components/Loader"

function Home() {
  const [posts, setPosts] = useState(null)
  let history = useHistory()

  useEffect(() => {
    async function getPosts() {
      try {
        let res = await get("posts")
        setPosts(res)
      } catch (err) {
        throw new Error(err.toString())
      }
    }
    getPosts()
  }, [])

  const goToPost = (id) => {
    history.push(`/post/${id}`)
  }

  return (
    <div>
      {posts ? (
        posts.map((post, idx) => <Post onClick={() => goToPost(post.id)} key={idx} post={post} />)
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Home
