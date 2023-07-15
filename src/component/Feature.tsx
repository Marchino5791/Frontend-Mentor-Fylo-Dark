import { FC } from 'react'

interface Props {
  image: string
  alt: string
  title: string
  subtitle: string
}

export const Feature: FC<Props> = ({ image, alt, title, subtitle }) => {
  return (
    <>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </>
  )
}
