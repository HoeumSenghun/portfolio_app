import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiGit,
  SiJenkins,
  SiPostman,
} from 'react-icons/si'
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlineDatabase } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const profile = {
  name: 'Hoeum Senghun',
  role: 'Full Stack Developer',
  location: 'Cambodia',
  email: 'hoeumsenghun369@gmail.com',
  github: 'https://github.com/HoeumSenghun',
  linkedin: 'https://www.linkedin.com/in/hoeumsenghun/',
  avatar: '/avatar-placeholder.svg',
}

export const skills = [
  { name: 'Java Spring Boot', icon: SiSpringboot, category: 'backend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
  { name: 'React.js', icon: SiReact, category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'database' },
  { name: 'Oracle', icon: HiOutlineDatabase, category: 'database' },
  { name: 'Git', icon: SiGit, category: 'tools' },
  { name: 'Jenkins', icon: SiJenkins, category: 'tools' },
  { name: 'Postman', icon: SiPostman, category: 'tools' },
]

export const projects = [
  {
    id: '1',
    title: 'Kilohealth Website',
    description: 'Website blog that talk about health. This Project is a team project that contributed KiloIT members.',
    tags: ['Html', 'css', 'JavaScript', 'React.js', 'gitLab'],
    href: 'https://www.kilohealth.com',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'This is my first portfolio built with Next.js, React, TypeScript, and Tailwind CSS.',
    tags: ['Html', 'css', 'Tailwindcss', 'JavaScript', 'Next.js', 'React', 'Tailwind CSS'],
    href: 'https://senghunhoeum.vercel.app/',
  },
  {
    id: '3',
    title: 'Zentrio Full Stack Website',
    description: 'Full stack website with Nextjs frontend and Java Spring Boot Backend. This Website is a task management system that allows users to create, manage, and track tasks efficiently.',
    tags: ['Html', 'css', 'Tailwindcss', 'JavaScript' , 'Next.js', 'Java', 'Spring Boot', 'PostgreSQL', 'GitHub'],
    href: 'https://kshrd.zentrio.pro/',
  },
]

export const experiences = [
  {
    id: '1',
    role: 'Java Developer',
    company: 'eMoney Solution PLC',
    period: '2025 - Present',
    highlights: [
      'Developed and maintained backend services for digital payment and wallet systems',
      'Designed and implemented RESTful APIs for internal and external integrations',
      'Collaborated with cross-functional teams to deliver scalable financial solutions',
      'Optimized database queries and application performance for high-volume transactions',
      'Participated in system design, code reviews, testing, and deployment processes',
      'Maintained secure and reliable payment processing workflows',
      'Contributed to production issue investigation and system monitoring'
    ]
  },
  {
    id: '2',
    role: 'Software Engineer (Student)',
    company: 'Korea Software HRD Center (KSHRD)',
    period: '2025 - 2026',
    highlights: ['HtML', 'Css', 'Tailwind CSS', 'JavaScript', 'JavaScript & TypeScript', 'Git workflows', 'java Spring Boot', 'PostgreSQL', 'UX/UI design'],
  },
  {
    id: '3',
    role: 'Frontend Developer (Trainee)',
    company: 'KiloIT',
    period: '2024 - 2025',
    highlights: ['HtML', 'Css', 'JavaScript', 'React.js', 'Git workflows'],
  },
]

export const achievements = [
  {
    id: '1',
    title: 'Full Stack Portfolio',
    year: '2025',
    body: 'Launched a production-ready portfolio using Next.js, next-intl, and modern UI patterns.',
  },
  {
    id: '2',
    title: 'Backend & API Development',
    year: '2024',
    body: 'Built REST services with Spring Boot, tested with Postman, and deployed with Git & Jenkins.',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: HiOutlineMail },
  { label: 'Location', href: '#', icon: HiOutlineLocationMarker },
]

export const bentoSections = [
  { key: 'about', href: '/about', span: 'md:col-span-2 md:row-span-2' },
  { key: 'projects', href: '/projects', span: 'md:col-span-2' },
  { key: 'skills', href: '/skills', span: '' },
  { key: 'experience', href: '/experiences', span: '' },
  { key: 'achievement', href: '/achievement', span: 'md:col-span-2' },
  { key: 'contact', href: '/contact', span: '' },
]
