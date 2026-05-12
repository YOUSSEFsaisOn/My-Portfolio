'use client'

import Link from 'next/link'
import FluidCardStack from './framer/fluid-card-stack'
import { ShoppingBag, StickyNote, Video, Lock, BookOpen, Layout } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with payment integration, product filtering, and responsive design. Implemented using Next.js, React Query, and Paymob payment gateway.',
      tags: ['Next.js', 'React Query', 'Paymob', 'Tailwind CSS', '.NET Backend'],
      gradient: 'from-blue-500 to-purple-500',
      icon: '🛍️'
    },
    {
      title: 'Notes Management App',
      description: 'Full-stack notes application with CRUD operations, JWT authentication, and real-time synchronization. Built with Next.js frontend and .NET Web API backend.',
      tags: ['Next.js', 'TypeScript', '.NET API', 'JWT Auth', 'Real-time Sync'],
      gradient: 'from-cyan-500 to-blue-500',
      icon: '📝'
    },
    {
      title: 'Secure Video Platform',
      description: 'Video streaming application with secure content protection and Bunny.net integration. Implemented authentication, protected routes, and optimized video delivery.',
      tags: ['Next.js', 'Bunny.net', 'Authentication', 'Security', 'Performance'],
      gradient: 'from-emerald-500 to-cyan-500',
      icon: '🎥'
    },
    {
      title: 'Firebase Authentication System',
      description: 'Secure authentication application with Google Sign-In and Email/Password login. Implemented using Firebase Authentication with modern React patterns.',
      tags: ['React.js', 'Firebase', 'OAuth', 'Authentication', 'Security'],
      gradient: 'from-orange-500 to-red-500',
      icon: '🔐'
    },
    {
      title: 'Course Learning Platform',
      description: 'Production-ready learning platform with course management, video streaming, and payment integration. Fully deployed on MonsterASP.NET with scalable architecture.',
      tags: ['Next.js', 'TypeScript', 'Course Management', 'Video Streaming', 'Scalable Architecture'],
      gradient: 'from-pink-500 to-rose-500',
      icon: '📚'
    },
    {
      title: 'Responsive Dashboard',
      description: 'Modern dashboard application with real-time data visualization, responsive design, and optimized performance. Built with React.js and custom CSS animations.',
      tags: ['React.js', 'Data Visualization', 'Responsive Design', 'Animations', 'Performance'],
      gradient: 'from-indigo-500 to-purple-500',
      icon: '📊'
    },
  ]

  const cardData = [
    {
      id: '1',
      title: 'E-Commerce',
      description: 'Full-stack e-commerce application with payment integration, product filtering, and responsive design.',
      icon: <ShoppingBag className="text-white" size={24} />,
      color: '#3b82f6',
      buttonText: 'View Project'
    },
    {
      id: '2',
      title: 'Notes App',
      description: 'Full-stack notes application with CRUD operations, JWT authentication, and real-time synchronization.',
      icon: <StickyNote className="text-white" size={24} />,
      color: '#10b981',
      buttonText: 'View Project'
    },
    {
      id: '3',
      title: 'Video Platform',
      description: 'Video streaming application with secure content protection and Bunny.net integration.',
      icon: <Video className="text-white" size={24} />,
      color: '#a855f7',
      buttonText: 'View Project'
    },
    {
      id: '4',
      title: 'Security',
      description: 'Secure authentication application with Google Sign-In and Email/Password login.',
      icon: <Lock className="text-white" size={24} />,
      color: '#f59e0b',
      buttonText: 'View Project'
    }
  ]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-full"
            >
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-lg`} />
              
              {/* Card */}
              <div className="relative bg-slate-900/80 backdrop-blur rounded-2xl p-8 h-full border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {project.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 text-cyan-300 text-xs rounded-full border border-slate-600/50 group-hover:bg-slate-700 group-hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Button */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50">
                    View Details
                  </button>
                </div>

                {/* Glowing effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-2xl transition-all duration-500 -z-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
