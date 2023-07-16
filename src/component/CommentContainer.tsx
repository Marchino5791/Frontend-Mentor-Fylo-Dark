import { useState } from 'react'
import { comments } from '../data.ts'
import { Comment } from './Comment.tsx'
import quote from '../assets/bg-quotes.png'

export const CommentContainer = () => {
  const [commentsArr] = useState(comments)

  return (
    <section id="comments">
      <img src={quote} alt="quote" className="quote" />
      <div className="comments-container">
        {commentsArr.map(
          (comment: {
            id: number
            comment: string
            image: string
            author: string
            jobTitle: string
          }) => (
            <div
              className="comments-container__comment shadow"
              key={comment.id}
            >
              <Comment
                comment={comment.comment}
                image={comment.image}
                author={comment.author}
                jobTitle={comment.jobTitle}
              />
            </div>
          )
        )}
      </div>
    </section>
  )
}
