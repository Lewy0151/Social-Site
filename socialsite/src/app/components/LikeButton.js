'use client'

const LikeButton = ({ likes, onClick }) => {
  return (
    <button onClick={onClick} className="flex items-center text-red-500 hover:text-red-600">
      ❤️ <span className="ml-1">{likes}</span>
    </button>
  )
}

export default LikeButton
