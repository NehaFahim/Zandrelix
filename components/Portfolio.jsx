"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, Sparkles, Briefcase, 
  Users, Award, Heart, Rocket,
  Star, Clock, ThumbsUp, ExternalLink,
  Calendar, MessageCircle, Eye, X,
  Code, Layers, Zap, CheckCircle,
  Monitor, Smartphone, Palette, Globe
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "JSM Advertising",
    category: "Website Development",
    image: "/assets/jsm.png",
    description: "Modern advertising website with lead generation system",
    fullDescription: "JSM Advertising needed a modern digital presence to showcase their services and generate quality leads. We built a responsive, SEO-optimized website with integrated lead generation forms and analytics tracking. The result was a 40% increase in inquiries within the first month.",
    tag: "Website Development",
    rating: 4.9,
    reviews: 28,
    date: "Dec 2024",
    client: "JSM Advertising Agency",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    features: ["Lead Generation", "SEO Optimized", "Analytics Dashboard", "Mobile Responsive"],
    liveUrl: "https://jsmadvertising.com",
    results: ["70% Speed Increase", "40% More Leads", "50% Bounce Rate Decrease"]
  },
  {
    id: 2,
    title: "MBU Learning Store",
    category: "E-Commerce",
    image: "/assets/mbu.jpg",
    description: "Online learning platform with course management system",
    fullDescription: "MBU Learning Store required a comprehensive e-learning platform with course management, payment processing, and student tracking. We developed a full-featured solution with interactive course content, progress tracking, and secure payment integration.",
    tag: "E-Commerce",
    rating: 4.8,
    reviews: 34,
    date: "Nov 2024",
    client: "MBU Education",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["Course Management", "Payment Gateway", "Progress Tracking", "Student Dashboard"],
    liveUrl: "https://www.homeschoolingwithmbu.com/",
    results: ["1000+ Students", "95% Completion Rate", "4.8/5 Rating"]
  },
{
  id: 3,
  title: "Furniture Store Website",
  category: "E-Commerce Website",
  image: "/assets/furniture.png",
  description: "Modern furniture e-commerce website with a premium shopping experience",
  fullDescription:"We built a modern furniture e-commerce website designed to showcase products beautifully and create a smooth online shopping experience. The website combines a clean, premium interface with responsive design, intuitive product browsing, and a seamless user journey across desktop and mobile.",
    tag: "E-Commerce Website",
    rating: 4.9,
    reviews: 42,
    date: "2025",
    client: "Furniture Store",
    technologies: ["Next.js","TypeScript","Tailwind CSS","Sanity"],
    features: ["Product Showcase","Responsive Design","Product Categories","CMS Integration"],
     liveUrl: "https://furniture-store-puce.vercel.app/",
     results: ["Premium Shopping Experience","Fully Responsive","Easy Product Management"]
},
  {
    id: 4,
    title: "Reismans Bakery",
    category: "Website Development",
    image: "/assets/bakery.jpg",
    description: "Bakery website with online ordering and delivery system",
    fullDescription: "Adil Bakers needed a delicious digital presence with online ordering capabilities. We built a mouth-watering website with integrated ordering system, delivery tracking, and a beautiful gallery showcasing their products.",
    tag: "Website Development",
    rating: 4.7,
    reviews: 19,
    date: "Sep 2024",
    client: "Adil Bakers",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    features: ["Online Ordering", "Delivery Tracking", "Product Gallery", "Customer Reviews"],
    liveUrl: "https://reismansbakery.com/",
    results: ["200% Online Orders", "4.7/5 Rating", "Happy Customers"]
  },
  {
    id: 5,
    title: "Movie Discovery App",
    category: "Web Application",
    image: "/assets/merix.jpg",
    description: "Interactive movie discovery platform with AI recommendations",
    fullDescription: "Movie Discovery App is a cutting-edge platform that uses AI to recommend movies based on user preferences. We built a responsive web application with real-time search, personalized recommendations, and a stunning UI.",
    tag: "Web Application",
    rating: 4.9,
    reviews: 56,
    date: "Aug 2024",
    client: "Merix Studios",
    technologies: ["React", "Redux", "TMDB API", "Framer Motion"],
    features: ["AI Recommendations", "Real-time Search", "Watchlist", "User Profiles"],
    liveUrl: "https://moviediscovery.com",
    results: ["10K+ Users", "85% Engagement Rate", "4.9/5 Rating"]
  },
  {
    id: 6,
    title: "AuditRanker Dashboard",
    category: "Web Application",
    image: "/assets/audit.jpg",
    description: "Business analytics dashboard with real-time ranking data",
    fullDescription: "AuditRanker Dashboard provides businesses with real-time analytics and ranking data. We created an intuitive dashboard with interactive charts, custom reports, and data visualization tools.",
    tag: "Web Application",
    rating: 4.6,
    reviews: 23,
    date: "Jul 2024",
    client: "AuditRanker Inc",
    technologies: ["Next.js", "Chart.js", "PostgreSQL", "Tailwind"],
    features: ["Real-time Analytics", "Custom Reports", "Data Visualization", "Team Collaboration"],
    liveUrl: "https://auditranker.com",
    results: ["500+ Businesses", "95% Satisfaction", "Real-time Data"]
  },
  {
    id: 7,
    title: "PixelCraft Branding",
    category: "Branding",
    image: "/assets/pixel.jpg",
    description: "Complete brand identity with visual design and guidelines",
    fullDescription: "PixelCraft Studio needed a complete brand identity that would set them apart in the design industry. We created a comprehensive brand package including logo design, color palette, typography, and brand guidelines.",
    tag: "Branding",
    rating: 5.0,
    reviews: 38,
    date: "Jun 2024",
    client: "PixelCraft Studio",
    technologies: ["Figma", "Adobe Suite", "Brand Strategy"],
    features: ["Logo Design", "Color Palette", "Typography", "Brand Guidelines"],
    liveUrl: "https://pixelcraft.design",
    results: ["Premium Identity", "Brand Recognition", "Client Trust"]
  },
  
  // {
  //   id: 8,
  //   title: "Luxury Stays",
  //   category: "E-Commerce",
  //   image: "/assets/luxury.jpg",
  //   description: "Premium hotel booking platform with luxury experience",
  //   fullDescription: "Luxury Stays Hotels needed a booking platform that matched their premium service standards. We built a sophisticated booking system with luxury visuals, seamless booking flow, and personalized guest experiences.",
  //   tag: "E-Commerce",
  //   rating: 4.8,
  //   reviews: 45,
  //   date: "May 2024",
  //   client: "Luxury Stays Hotels",
  //   technologies: ["Next.js", "MongoDB", "Stripe", "Google Maps"],
  //   features: ["Booking System", "Payment Processing", "Hotel Search", "Guest Reviews"],
  //   liveUrl: "https://luxurystays.com",
  //   results: ["1000+ Bookings", "4.8/5 Rating", "Premium Experience"]
  // }
  {
id: 8,
title: "Business Nexus Platform",
category: "Web Application",
image: "/assets/b-nexus.png",
description: "Modern networking platform connecting entrepreneurs with investors and business opportunities",
fullDescription: "Business Nexus is a modern web platform designed to connect entrepreneurs and investors through a structured digital ecosystem. We built an intuitive dashboard experience where entrepreneurs can manage their startup presence, discover potential investors, handle collaboration requests, communicate with connections, track meetings, and manage their professional profile. The platform brings networking, communication, investor discovery, notifications, and collaboration tools together in one streamlined experience.",
tag: "Web Application",
rating: 4.9,
reviews: 42,
date: "2026",
client: "Business Nexus",
technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
features: ["Entrepreneur Dashboard", "Investor Discovery", "Collaboration Requests", "Real-time Messaging", "Meeting Management", "Notifications", "User Profiles", "Responsive UI"],
liveUrl: "https://nexus-app-brown.vercel.app/login",
results: ["Streamlined Networking", "Centralized Dashboard", "Faster Collaboration"]
},
{
id: 9,
title: "Secure Data Encryption System",
category: "AI Web Application",
image: "/assets/data.png",
description: "Secure and intelligent data management application designed to make working with sensitive data simpler and more efficient",
fullDescription: "...",
tag: "AI Web Application",
rating: 4.9,
reviews: 0,
date: "2025",
client: "SecureData",
technologies: ["Python", "Streamlit", "AI"],
features: ["...", "...", "...", "..."],
liveUrl: "https://securedata05.streamlit.app/",
results: ["...", "...", "..."]
},
{
id: 10,
title: "Secure Password Generator",
category: "AI Web Application",
image: "/assets/password.png",
description: "Simple and secure password generator for creating strong, customizable passwords",
fullDescription: "Secure Password Generator is a lightweight web application designed to help users quickly create strong and secure passwords. The application provides a simple interface for generating customized passwords based on different requirements, making it easier to create unique credentials instead of relying on weak or repetitive passwords. Built with a clean and responsive interface, the tool focuses on simplicity, usability, and practical password security.",
tag: "Web Application",
rating: 4.9,
reviews: 0,
date: "2025",
client: "Personal Project",
technologies: ["Python", "Streamlit"],
features: ["Secure Password Generation", "Custom Password Options", "Simple User Interface", "Responsive Design", "Instant Generation", "Easy to Use"],
liveUrl: "https://password-generate001.streamlit.app/",
results: ["Strong Passwords", "Instant Generation", "Simple User Experience"]
},
];

const categories = [
  "All Projects",
  "Website Development",
  "E-Commerce",
  "Branding",
  "AI Web Application",
  "Web Application"
];

const stats = [
  { number: "20+", label: "Projects Completed", icon: <Briefcase className="w-5 h-5 text-brand-400" /> },
  { number: "10+", label: "Happy Clients", icon: <Users className="w-5 h-5 text-brand-400" /> },
  { number: "100%", label: "Client Satisfaction", icon: <Heart className="w-5 h-5 text-brand-400" /> },
  { number: "3+", label: "Years Experience", icon: <Award className="w-5 h-5 text-brand-400" /> }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />);
    }
    return stars;
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="hero-photo relative overflow-hidden max-w-[1360px] mx-auto px-16 pt-16 pb-14 max-lg:px-6 max-lg:pt-12 max-lg:pb-10 items-center justify-center text-center">
       {/* Background image */}
<div
  className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/portfolio-hero-bg.png')",
  }}
/>


  {/* Hero — full-bleed, flush under the navbar (matches Services / Case Studies) */}
        {/* <section
          className="hero-photo relative isolate text-center min-h-[420px] md:min-h-[480px] flex flex-col items-center justify-center overflow-hidden"
        > */}

{/* Dark overlay — keeps text readable while image remains visible */}
<div
  className="absolute inset-0 -z-10"
  style={{
    background:
      "linear-gradient(90deg, var(--hero-ov-1) 0%, var(--hero-ov-2) 45%, var(--hero-ov-3) 100%)",
  }}
/>

{/* Soft vignette for better readability */}
<div
  className="absolute inset-0 -z-10"
  style={{
    background:
      "radial-gradient(ellipse 75% 65% at 50% 45%, var(--hero-vg-1) 0%, var(--hero-vg-2) 65%, var(--hero-vg-3) 100%)",
  }}
/>

  {/* ================= HEADER CONTENT ================= */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative z-10 w-full px-4 md:px-6 py-16 md:py-20"
  >
    <span className="text-brand-400 font-semibold tracking-wider uppercase text-xs md:text-sm bg-brand-500/10 px-4 py-2 rounded-full border border-brand-500/20 inline-flex items-center mb-3 md:mb-4">
      <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
      Our Portfolio
    </span>

    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
      Our Work {" "}
      <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">
        Your Success
      </span>
    </h2>

    <div className="mt-4 md:mt-6 max-w-3xl mx-auto">
      <p className="text-muted text-sm md:text-base lg:text-lg">
        <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent font-semibold">
          Bringing Brands to Life.
        </span>
      </p>

      <p className="text-muted text-sm md:text-base mt-1 px-4">
       Explore selected Zandrelix projects across web development, e-commerce, applications and digital design built to solve real problems and create measurable impact.
      </p>

    </div>
  </motion.div>
</section>

        <div className="max-w-full mx-auto px-4 py-12 md:py-16 lg:py-20">
          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          >
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-[#0a0e1f] text-muted border border-white/10 hover:border-brand-500/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-[#0a0e1f] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-brand-500/10 cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#05060d]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1f] via-transparent to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = '/assets/placeholder.jpg';
                    }}
                  />
                  
                  {/* Project Tag */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="text-xs font-semibold bg-gradient-to-r from-brand-500/30 to-violet-500/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full border border-brand-500/30">
                      {project.tag}
                    </span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-brand-600/90 via-brand-600/50 to-transparent z-10 transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`} />

                  {/* Hover Actions Overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-20 flex items-center justify-center"
                  >
                    <div className="flex gap-4">
                      <button 
                        onClick={() => openProjectModal(project)}
                        className="px-6 py-3 bg-white text-brand-600 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Project
                      </button>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-brand-600/80 backdrop-blur-sm text-white rounded-full font-semibold text-sm border border-white/20 hover:bg-brand-600 transition-all flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="relative z-20 p-5 md:p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white font-bold text-lg md:text-xl group-hover:text-brand-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted text-sm mt-0.5">
                        {project.category}
                      </p>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 bg-[#05060d] px-3 py-1.5 rounded-full border border-white/10">
                      <div className="flex items-center gap-0.5">
                        {renderStars(project.rating)}
                      </div>
                      <span className="text-white font-semibold text-sm ml-1">
                        {project.rating}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted text-sm md:text-base mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-[10px] px-2.5 py-1 bg-brand-500/10 text-brand-400 rounded-full border border-brand-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Client & Date */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10/50">
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.client}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted">
                      <MessageCircle className="w-3 h-3" />
                      <span>{project.reviews} reviews</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 md:mt-16 lg:mt-20 bg-gradient-to-br from-[#0a0e1f] to-[#101a33] p-6 md:p-8 lg:p-10 rounded-3xl border border-white/10"
          >
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                Have a <span className="bg-gradient-to-r from-brand-400 to-violet-400 bg-clip-text text-transparent">Project</span> in Mind?
              </h3>
              <p className="text-muted text-sm md:text-base mt-1">
                Let&apos;s work together to bring your ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-brand-400 mb-1">
                    {stat.icon}
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-[10px] md:text-xs text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center mt-6 md:mt-8"
            >
              <button className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-brand-500 to-violet-500 text-white rounded-full font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:scale-105 group">
                Start Your Project
                <Rocket className="inline ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-lg overflow-y-auto py-8"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative flex w-full max-w-5xl max-h-[85vh] flex-col overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-[#05060d] to-[#0a0e1f] shadow-2xl shadow-brand-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-brand-500/30 transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Header Image */}
              <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] flex-shrink-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#05060d] via-transparent to-transparent z-10" />
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 bg-gradient-to-t from-[#05060d] to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold bg-brand-500/30 backdrop-blur-sm text-white px-4 py-1.5 rounded-full border border-brand-500/30">
                      {selectedProject.tag}
                    </span>
                    <span className="text-xs text-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {selectedProject.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 min-h-0 overflow-y-auto p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-brand-400" />
                        Project Overview
                      </h3>
                      <p className="text-[#c7cbd6] text-sm md:text-base leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProject.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[#c7cbd6] text-sm">
                            <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        Results
                      </h3>
                      <div className="grid grid-cols-3 gap-3">
                        {selectedProject.results.map((result, idx) => (
                          <div key={idx} className="bg-[#0a0e1f] p-3 rounded-xl text-center border border-white/10">
                            <div className="text-sm font-bold text-white">{result}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Client Info */}
                    <div className="bg-[#0a0e1f] p-4 rounded-2xl border border-white/10">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                        Client
                      </h4>
                      <div className="flex items-center gap-2 text-white font-medium">
                        <Users className="w-4 h-4 text-brand-400" />
                        {selectedProject.client}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="bg-[#0a0e1f] p-4 rounded-2xl border border-white/10">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                        Rating & Reviews
                      </h4>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {renderStars(selectedProject.rating)}
                        </div>
                        <span className="text-white font-bold text-lg">{selectedProject.rating}</span>
                        <span className="text-muted text-sm">({selectedProject.reviews} reviews)</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="bg-[#0a0e1f] p-4 rounded-2xl border border-white/10">
                      <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="text-xs px-3 py-1.5 bg-brand-500/10 text-brand-400 rounded-full border border-brand-500/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-brand-500 to-violet-500 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-brand-500/25 transition-all text-center flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                      </a>
                      <button
                        onClick={closeProjectModal}
                        className="px-4 py-3 bg-[#0a0e1f] text-white rounded-xl font-semibold text-sm border border-white/10 hover:border-brand-500/30 transition-all"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}