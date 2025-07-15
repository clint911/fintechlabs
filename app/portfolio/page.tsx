import { ArrowRight, ExternalLink, Github, Star, TrendingUp, Shield, Users, Calendar, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation" 

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
    <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transforming <span className="text-purple-400">Ideas</span> into
              <br />
              Market-Ready <span className="text-blue-400">Products</span>
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Explore our portfolio of successful FinTech and Web3 solutions that bridge the gap between innovative
              concepts and tangible, market-ready digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "50+", label: "Products Launched", icon: <TrendingUp className="h-6 w-6" /> },
              { number: "100%", label: "Success Rate", icon: <Award className="h-6 w-6" /> },
              { number: "$2.5B+", label: "Transaction Volume", icon: <Shield className="h-6 w-6" /> },
              { number: "15+", label: "Countries Served", icon: <Users className="h-6 w-6" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10"
              >
                <div className="text-purple-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-white/70">
              Deep dives into our most impactful projects and the measurable business value delivered
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                title: "Global DeFi Trading Platform",
                category: "Web3 & Blockchain",
                client: "Fortune 500 Financial Institution",
                timeline: "8 months",
                description:
                  "Seamlessly integrated blockchain technology with traditional financial systems to create a comprehensive DeFi trading platform serving institutional clients globally.",
                challenge:
                  "Navigate complex regulatory requirements across multiple jurisdictions while ensuring enterprise-grade security and scalability.",
                solution:
                  "Developed a modular, compliance-first architecture with automated KYC/AML processes and multi-layer security protocols.",
                results: [
                  "$500M+ in trading volume within first quarter",
                  "99.9% uptime with zero security incidents",
                  "Regulatory approval in 12 jurisdictions",
                  "50% reduction in operational costs",
                ],
                technologies: ["Solidity", "React", "Node.js", "AWS", "PostgreSQL", "Redis"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "AI-Powered Digital Banking Suite",
                category: "FinTech Development",
                client: "Regional Banking Consortium",
                timeline: "12 months",
                description:
                  "Transformed traditional banking operations with AI-driven insights, automated processes, and mobile-first user experiences.",
                challenge:
                  "Modernize legacy banking infrastructure while maintaining regulatory compliance and ensuring seamless user migration.",
                solution:
                  "Implemented microservices architecture with AI/ML integration for personalized financial services and fraud detection.",
                results: [
                  "300% increase in mobile engagement",
                  "85% reduction in fraud incidents",
                  "40% improvement in customer satisfaction",
                  "60% faster loan approval process",
                ],
                technologies: ["React Native", "Python", "TensorFlow", "Kubernetes", "MongoDB", "Apache Kafka"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Cross-Chain NFT Marketplace",
                category: "Web3 & Digital Assets",
                client: "Creative Industry Platform",
                timeline: "6 months",
                description:
                  "Built a comprehensive NFT marketplace with cross-chain compatibility, creator tools, and royalty management systems.",
                challenge:
                  "Create interoperable solution across multiple blockchains while ensuring user-friendly experience for non-technical creators.",
                solution:
                  "Developed unified API layer with automated cross-chain bridging and intuitive creator dashboard with built-in analytics.",
                results: [
                  "$50M+ in NFT sales volume",
                  "10,000+ active creators onboarded",
                  "Support for 5 major blockchains",
                  "95% creator retention rate",
                ],
                technologies: ["Next.js", "Ethereum", "Polygon", "IPFS", "Web3.js", "GraphQL"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Enterprise Resource Planning System",
                category: "Full-Stack Web Development",
                client: "Manufacturing Consortium",
                timeline: "10 months",
                description:
                  "Comprehensive ERP system built with Spring Boot backend and Next.js frontend, managing inventory, production, and financial operations across multiple facilities.",
                challenge:
                  "Replace legacy systems while ensuring zero downtime and seamless data migration from multiple disparate systems.",
                solution:
                  "Implemented microservices architecture with Spring Boot, React-based dashboard, and phased migration strategy with real-time data synchronization.",
                results: [
                  "40% improvement in operational efficiency",
                  "Real-time inventory tracking across 15 facilities",
                  "99.9% system uptime during migration",
                  "60% reduction in manual data entry",
                ],
                technologies: ["Spring Boot", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Real-Time Analytics Dashboard",
                category: "Backend & API Development",
                client: "E-commerce Platform",
                timeline: "4 months",
                description:
                  "High-performance analytics backend using FastAPI with real-time data processing, serving millions of requests daily for business intelligence.",
                challenge:
                  "Process and analyze massive datasets in real-time while maintaining sub-second response times for dashboard queries.",
                solution:
                  "Built scalable FastAPI backend with async processing, Redis caching, and optimized database queries with real-time WebSocket connections.",
                results: [
                  "Processing 10M+ events per day",
                  "Sub-200ms average API response time",
                  "Real-time dashboard updates",
                  "90% reduction in data processing costs",
                ],
                technologies: ["FastAPI", "Python", "PostgreSQL", "Redis", "WebSockets", "Docker"],
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Content Management Platform",
                category: "Full-Stack Development",
                client: "Media & Publishing Company",
                timeline: "6 months",
                description:
                  "Full-stack content management system built with Remix, featuring advanced editorial workflows, multi-tenant architecture, and SEO optimization.",
                challenge:
                  "Create a scalable CMS that handles multiple publications with different branding while maintaining excellent SEO performance.",
                solution:
                  "Developed with Remix full-stack framework, implementing server-side rendering, progressive enhancement, and advanced caching strategies.",
                results: [
                  "300% improvement in page load speeds",
                  "Managing 50+ publications",
                  "95+ Google PageSpeed scores",
                  "50% increase in organic traffic",
                ],
                technologies: ["Remix", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-white/60 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.timeline}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-purple-300 mb-4">{project.client}</p>
                      <p className="text-white/70 mb-6">{project.description}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                          <p className="text-white/70 text-sm">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                          <p className="text-white/70 text-sm">{project.solution}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-white/80 text-sm">
                              <Star className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                          View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-r-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-r-lg"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">More Success Stories</h2>
            <p className="text-xl text-white/70">
              Additional projects showcasing our expertise across FinTech and Web3 domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                category: "Full-Stack",
                description: "Complete e-commerce solution with Spring Boot backend and Next.js storefront.",
                metrics: "1M+ products, 99.9% uptime",
                technologies: ["Spring Boot", "Next.js", "MySQL", "Redis"],
              },
              {
                title: "Learning Management System",
                category: "Web Development",
                description:
                  "Educational platform built with Remix featuring real-time collaboration and progress tracking.",
                metrics: "50K+ students, 95% satisfaction",
                technologies: ["Remix", "FastAPI", "PostgreSQL", "WebRTC"],
              },
              {
                title: "Healthcare Management API",
                category: "Backend",
                description: "HIPAA-compliant backend system for patient data management and appointment scheduling.",
                metrics: "HIPAA certified, 24/7 uptime",
                technologies: ["Spring Boot", "MySQL", "Docker", "AWS"],
              },
              {
                title: "Social Media Analytics",
                category: "Full-Stack",
                description: "Real-time social media monitoring and analytics platform with custom dashboard.",
                metrics: "10M+ posts analyzed daily",
                technologies: ["FastAPI", "React", "MongoDB", "Kafka"],
              },
              {
                title: "Payment Gateway Integration",
                category: "FinTech",
                description: "Multi-currency payment processing with fraud detection and risk management.",
                metrics: "99.99% uptime, <0.1% fraud rate",
                technologies: ["Node.js", "Stripe", "MongoDB", "Docker"],
              },
              {
                title: "DAO Governance Platform",
                category: "Web3",
                description: "Decentralized governance system with voting mechanisms and treasury management.",
                metrics: "100+ DAOs, $500M+ governed",
                technologies: ["Solidity", "Next.js", "The Graph", "IPFS"],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4"></div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{project.description}</p>
                  <div className="text-purple-300 text-sm font-medium mb-4">{project.metrics}</div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-white/10 text-white/70 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how we can transform your innovative concept into the next market-ready success story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Request Detailed Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-white mb-4 md:mb-0">
              FinTech<span className="text-purple-400">Labs</span>
            </div>
            <div className="text-white/70 text-center md:text-right">
              <p>© 2024 FinTechLabs. All rights reserved.</p>
              <p className="mt-1">Transforming ideas into trusted digital products.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
