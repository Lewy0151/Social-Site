'use client'

import LikeButton from './LikeButton'

const SocialCard = ({ post, onLike }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-10 max-w-3xl mx-auto w-full">
      <div className="font-bold text-lg text-gray-800">{post.username}</div>
      <div className="text-gray-700 my-2">{post.text}</div>
      <LikeButton likes={post.likes} onClick={() => onLike(post.id)} />
    </div>
  )
}

export default SocialCard
