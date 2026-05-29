import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFramer,
} from 'react-icons/si'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const profile = {
  name: 'Senghun Hoeum',
  role: 'Full Stack Developer',
  location: 'Cambodia',
  email: 'hoeumsenghun369@gmail.com',
  github: 'https://github.com/HoeumSenghun',
  linkedin: 'https://www.linkedin.com',
  avatar: '/avatar-placeholder.svg',
}

export const skills = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Framer Motion', icon: SiFramer },
]

export const projects = [
  {
    id: '1',
    title: 'Portfolio Site',
    description: 'Personal portfolio with i18n, theme toggle, and bento layout.',
    tags: ['Next.js', 'Tailwind'],
    href: '#',
  },
  {
    id: '2',
    title: 'Dashboard UI',
    description: 'Analytics dashboard with responsive charts and dark mode.',
    tags: ['React', 'shadcn/ui'],
    href: '#',
  },
  {
    id: '3',
    title: 'E-commerce Starter',
    description: 'Product catalog and cart flow with mock API data.',
    tags: ['Next.js', 'Zustand'],
    href: '#',
  },
]

export const experiences = [
  {
    id: '1',
    role: 'Web Developer',
    company: 'Freelance / Projects',
    period: '2024 — Present',
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Learning & Practice',
    period: '2023 — 2024',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: HiOutlineMail },
  { label: 'Location', href: '#', icon: HiOutlineLocationMarker },
]

export const bentoSections = [
  { key: 'about', href: '#about', span: 'md:col-span-2 md:row-span-2' },
  { key: 'projects', href: '#projects', span: 'md:col-span-2' },
  { key: 'skills', href: '#skills', span: '' },
  { key: 'experience', href: '#experience', span: '' },
  { key: 'achievement', href: '#achievement', span: 'md:col-span-2' },
  { key: 'contact', href: '#contact', span: '' },
]
