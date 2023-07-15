import { FC } from 'react'

import arrow from '../assets/icon-arrow.svg'

interface Props {
  image: string
  alt: string
  title: string
  subtitle1: string
  subtitle2: string
  link: string
}
export const FeatureBig: FC<Props> = ({
  image,
  alt,
  title,
  subtitle1,
  subtitle2,
  link,
}) => {
  return (
    <section className="bigFeature">
      <div className="bigFeature__img-box">
        <img src={image} alt={alt} />
      </div>
      <div className="bigFeature__text-box">
        <h2>{title}</h2>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
        <a href="#">
          {link}
          <img src={arrow} alt="arrow right" />
        </a>
      </div>
    </section>
  )
}
