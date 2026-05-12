'use client'

import FluidCardStack from './framer/fluid-card-stack'
import { ShoppingBag, StickyNote, Video, Lock, BookOpen, BarChart3 } from 'lucide-react'

const ALL_PROJECTS = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    shortTitle: 'E-Commerce',
    description: 'Full-stack e-commerce application with payment integration, product filtering, and responsive design. Implemented using Next.js, React Query, and Paymob payment gateway.',
    shortDescription: 'Full-stack e-commerce application with payment integration, product filtering, and responsive design.',
    tags: ['Next.js', 'React Query', 'Paymob', 'Tailwind CSS', '.NET Backend'],
    gradient: 'from-blue-500 to-purple-500',
    color: '#3b82f6',
    icon: <ShoppingBag className="text-white" size={24} />,
    emoji: '🛍️'
  },
  {
    id: '2',
    title: 'Notes Management App',
    shortTitle: 'Notes App',
    description: 'Full-stack notes application with CRUD operations, JWT authentication, and real-time synchronization. Built with Next.js frontend and .NET Web API backend.',
    shortDescription: 'Full-stack notes application with CRUD operations, JWT authentication, and real-time synchronization.',
    tags: ['Next.js', 'TypeScript', '.NET API', 'JWT Auth', 'Real-time Sync'],
    gradient: 'from-cyan-500 to-blue-500',
    color: '#10b981',
    icon: <StickyNote className="text-white" size={24} />,
    emoji: '📝'
  },
  {
    id: '3',
    title: 'Secure Video Platform',
    shortTitle: 'Video Platform',
    description: 'Video streaming application with secure content protection and Bunny.net integration. Implemented authentication, protected routes, and optimized video delivery.',
    shortDescription: 'Video streaming application with secure content protection and Bunny.net integration.',
    tags: ['Next.js', 'Bunny.net', 'Authentication', 'Security', 'Performance'],
    gradient: 'from-emerald-500 to-cyan-500',
    color: '#a855f7',
    icon: <Video className="text-white" size={24} />,
    emoji: '🎥'
  },
  {
    id: '4',
    title: 'Firebase Auth System',
    shortTitle: 'Security',
    description: 'Secure authentication application with Google Sign-In and Email/Password login. Implemented using Firebase Authentication with modern React patterns.',
    shortDescription: 'Secure authentication application with Google Sign-In and Email/Password login.',
    tags: ['React.js', 'Firebase', 'OAuth', 'Authentication', 'Security'],
    gradient: 'from-orange-500 to-red-500',
    color: '#f59e0b',
    icon: <Lock className="text-white" size={24} />,
    emoji: '🔐'
  },
]

export default function Projects() {
  const featuredProjectIds = ['1', '2', '3', '4']
  const cardData = ALL_PROJECTS
    .filter(p => featuredProjectIds.includes(p.id))
    .map(p => ({
      id: p.id,
      title: p.shortTitle || p.title,
      description: p.shortDescription || p.description,
      icon: p.icon || <BookOpen size={24} />,
      color: p.color || '#3b82f6',
      buttonText: 'View Project'
    }))

  return (
    <section id="projects" className="py-20 px-6 bg-slate-800/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">Showcase of my best work</p>
        </div>

        <div className="mb-12">
          <FluidCardStack cards={cardData} />
        </div>
      </div>
    </section>
  )
}
