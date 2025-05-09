'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddPost() {
  const [username, setUsername] = useState('')
  const [text, setText] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      username,
      text,
      likes: 0,
    }

    // Local storage and adding posts
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || []

    
    const updatedPosts = [newPost, ...existingPosts]

    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded max-w-7xl mx-auto w-full ">
      <h2 className="text-lg font-bold mb-4">Add a New Post</h2>

      <input
        className="w-full mb-2 p-2 border rounded"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <textarea
        className="w-full mb-2 p-2 border rounded"
        placeholder="Write your post here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Post
      </button>
    </form>
  )
}
