import access from '../src/assets/icon-access-anywhere.svg'
import security from '../src/assets/icon-security.svg'
import collaboration from '../src/assets/icon-collaboration.svg'
import file from '../src/assets/icon-any-file.svg'
import profile1 from '../src/assets/profile-1.jpg'
import profile2 from '../src/assets/profile-2.jpg'
import profile3 from '../src/assets/profile-3.jpg'

export const features: {
  id: number
  image: string
  alt: string
  title: string
  subtitle: string
}[] = [
  {
    id: 1,
    image: access,
    alt: 'icon with a pc and phone',
    title: 'Access your files, anywhere',
    subtitle:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    id: 2,
    image: security,
    alt: 'icon with a checked shield',
    title: 'Security you can trust',
    subtitle:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    id: 3,
    image: collaboration,
    alt: 'icon with three people',
    title: 'Real-time collaboration',
    subtitle:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    id: 4,
    image: file,
    alt: 'icon with a folder',
    title: 'Store any type of file',
    subtitle:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
]

export const comments: {
  id: number
  comment: string
  image: string
  author: string
  jobTitle: string
}[] = [
  {
    id: 1,
    comment:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    image: profile1,
    author: 'Satish Patel',
    jobTitle: 'Founder & CEO, Huddle',
  },
  {
    id: 2,
    comment:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    image: profile2,
    author: 'Bruce McKenzie',
    jobTitle: 'Founder & CEO, Huddle',
  },
  {
    id: 3,
    comment:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    image: profile3,
    author: 'Iva Boyd',
    jobTitle: 'Founder & CEO, Huddle',
  },
]
