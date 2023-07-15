import { FC } from 'react'

interface Props {
  comment: string
  image: string
  author: string
  jobTitle: string
}

export const Comment: FC<Props> = ({ comment, image, author, jobTitle }) => {
  return (
    <>
      <p className="comment">{comment}</p>
      <div className="comments-container__comment__author">
        <img src={image} alt={author} />
        <div className="comments-container__comment__author__text-box">
          <p className="author">{author}</p>
          <p className="jobTitle">{jobTitle}</p>
        </div>
      </div>
    </>
  )
}
