import { useState } from 'react'
import { Feature } from './Feature'
import { features } from '../data'

export const Features = () => {
  const [featArr] = useState(features)

  return (
    <section id="features">
      {featArr.map(
        (feat: {
          id: number
          image: string
          alt: string
          title: string
          subtitle: string
        }) => (
          <div key={feat.id}>
            <Feature
              image={feat.image}
              alt={feat.alt}
              title={feat.title}
              subtitle={feat.subtitle}
            />
          </div>
        )
      )}
    </section>
  )
}
