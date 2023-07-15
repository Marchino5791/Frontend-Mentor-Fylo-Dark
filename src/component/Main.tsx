import { Features } from './Features'
import { FeatureBig } from './FeatureBig'

import illustration from '../assets/illustration-stay-productive.png'
import { CommentContainer } from './CommentContainer'
import { CTA } from './CTA'

export const Main = () => {
  return (
    <main>
      <Features />
      <FeatureBig
        image={illustration}
        alt="illustration with three people comunicate with each other"
        title="Stay productive, wherever you are"
        subtitle1="Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs."
        subtitle2="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        link="See how Fylo works"
      />
      <CommentContainer />
      <CTA />
    </main>
  )
}
