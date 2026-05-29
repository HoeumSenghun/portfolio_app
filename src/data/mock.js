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
    title: 'REST API Platform',
    description: 'Secure REST APIs with Java Spring Boot, JWT auth, and PostgreSQL.',
    tags: ['Spring Boot', 'PostgreSQL', 'Postman'],
    href: '#',
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'Bilingual portfolio built with Next.js, React, TypeScript, and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    href: '#',
  },
  {
    id: '3',
    title: 'Enterprise Web App',
    description: 'Full stack application with React frontend and Oracle database integration.',
    tags: ['React.js', 'Spring Boot', 'Oracle'],
    href: '#',
  },
]

export const experiences = [
  {
    id: '1',
    role: 'Full Stack Developer',
    company: 'Learning & Practice',
    period: '2025 - 2026',
    highlights: ['JavaScript & TypeScript', 'Git workflows', 'java Spring Boot', 'PostgreSQL', 'Git'],
  },
  {
    id: '2',
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
