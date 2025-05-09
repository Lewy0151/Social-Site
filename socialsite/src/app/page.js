'use client'

import { useState, useEffect } from 'react'
import SocialCard from './components/SocialCard'

export default function Home() {
  const [posts, setPosts] = useState([])

  // Access localStorage 
  useEffect(() => {
    const stored = localStorage.getItem('posts')
    if (stored) {
      setPosts(JSON.parse(stored))
    } else {
      const starterPosts = [
        { id: 1, username: 'Lewis', text: 'First post, Hello World!', likes: 0 }
      ]
      setPosts(starterPosts)
      localStorage.setItem('posts', JSON.stringify(starterPosts))
    }
  }, [])

  // Saving to localStorage when posts update
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(posts))
    }
  }, [posts])

  const handleLike = (id) => {
    setPosts(posts.map(post =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ))
  }

  return (
    <div>
      {posts.map(post => (
        <SocialCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </div>
  )
}
