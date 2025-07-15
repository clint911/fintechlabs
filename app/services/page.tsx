import { ArrowRight, Shield, CheckCircle, Cog, TrendingUp, Lock, Globe, Code, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="text-2xl font-bold text-white">
              FinTech<span className="text-purple-400">Labs</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/services" className="text-white font-medium">
                Services
              </a>
              <a href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-white/80 hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="/contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              End-to-End <span className="text-purple-400">Idea to Live Product</span> Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Comprehensive service portfolio spanning strategic advisory, in-depth development, and post-launch
              optimization. We bridge the gap between innovative blockchain concepts and market-ready FinTech solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Unified Service Portfolio</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Three pillars of excellence that transform complex ideas into secure, compliant, and market-ready products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "Strategic Advisory",
                description:
                  "Navigate the complexities at the intersection of emerging technologies and traditional finance",
                services: [
                  "Blockchain Integration Strategy",
                  "Regulatory Compliance Planning",
                  "Market Entry Analysis",
                  "Technology Stack Selection",
                  "Risk Assessment & Mitigation",
                  "Digital Asset Strategy",
                ],
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "Web3 & FinTech Development",
                description:
                  "Specialized development for blockchain, cryptocurrency, and financial technology solutions",
                services: [
                  "Smart Contract Development",
                  "DeFi Protocol Creation",
                  "Payment System Integration",
                  "Blockchain Infrastructure",
                  "Cryptocurrency Exchanges",
                  "RegTech Solutions",
                ],
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Full-Stack Web Development",
                description: "Complete web application development using modern frameworks and proven architectures",
                services: [
                  "Next.js & Remix Applications",
                  "Spring Boot Backend Systems",
                  "FastAPI & Express.js APIs",
                  "Mobile Backend Development",
                  "Database Architecture",
                  "Cloud Deployment & DevOps",
                ],
              },
              {
                icon: <Cog className="h-10 w-10" />,
                title: "Post-Launch Optimization",
                description: "Continuous improvement and scaling to deliver measurable business value",
                services: [
                  "Performance Monitoring",
                  "Security Audits",
                  "Feature Enhancement",
                  "Scalability Solutions",
                  "User Experience Optimization",
                  "Ongoing Support & Maintenance",
                ],
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="text-purple-400 mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                  <p className="text-white/70 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Specialized Capabilities</h2>
            <p className="text-xl text-white/70">
              Deep expertise in the converging landscape of AI, digital assets, and traditional finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Blockchain & Crypto Consulting",
                description: "Seamlessly integrate nascent blockchain technologies with established financial systems",
                features: [
                  "Cryptocurrency Exchange Development",
                  "Tokenization Strategies",
                  "Consensus Mechanism Design",
                  "Cross-chain Interoperability",
                  "Regulatory Compliance Framework",
                ],
                badge: "Blockchain",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "FinTech Web Development",
                description: "Transform complex financial concepts into user-friendly, secure digital experiences",
                features: [
                  "Digital Banking Platforms",
                  "Payment Gateway Integration",
                  "Robo-Advisory Systems",
                  "InsurTech Solutions",
                  "RegTech Automation",
                ],
                badge: "FinTech",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "AI & Machine Learning Integration",
                description: "Leverage artificial intelligence to enhance financial decision-making and automation",
                features: [
                  "Algorithmic Trading Systems",
                  "Fraud Detection & Prevention",
                  "Credit Scoring Models",
                  "Predictive Analytics",
                  "Natural Language Processing",
                ],
                badge: "AI/ML",
              },
              {
                icon: <Lock className="h-8 w-8" />,
                title: "Security & Compliance",
                description: "Robust security protocols and stringent regulatory compliance across all solutions",
                features: [
                  "Multi-layer Security Architecture",
                  "KYC/AML Implementation",
                  "GDPR Compliance",
                  "SOC 2 Certification Support",
                  "Penetration Testing",
                ],
                badge: "Security",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-400">{service.icon}</div>
                    <Badge variant="secondary" className="bg-purple-600/20 text-purple-300">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Web Development Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Full-Stack Web Development</h2>
            <p className="text-xl text-white/70">
              Complete web application development using modern frameworks and proven architectures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Frontend Development",
                description: "Modern, responsive web applications with exceptional user experiences",
                technologies: ["Next.js", "Remix", "React", "TypeScript", "Tailwind CSS"],
                features: [
                  "Server-Side Rendering (SSR)",
                  "Progressive Web Apps (PWA)",
                  "Mobile-First Design",
                  "Performance Optimization",
                  "SEO Optimization",
                ],
                badge: "Frontend",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Backend Development",
                description: "Scalable, secure backend systems and APIs for any application",
                technologies: ["Spring Boot", "FastAPI", "Express.js", "Node.js", "Python"],
                features: [
                  "RESTful API Design",
                  "GraphQL Implementation",
                  "Database Architecture",
                  "Authentication & Authorization",
                  "Microservices Architecture",
                ],
                badge: "Backend",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Full-Stack Solutions",
                description: "End-to-end application development with seamless frontend-backend integration",
                technologies: ["Remix Full-Stack", "Next.js + Spring Boot", "FastAPI + React"],
                features: [
                  "Unified Development Experience",
                  "Type-Safe APIs",
                  "Real-time Features",
                  "Cloud Deployment",
                  "CI/CD Pipelines",
                ],
                badge: "Full-Stack",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="backdrop-blur-xl bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400">{service.icon}</div>
                    <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">
                      {service.badge}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white/90 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-blue-600/20 text-blue-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white/80">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Architecture Patterns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Popular Architecture Combinations",
                combinations: [
                  {
                    name: "Spring Boot + Next.js",
                    description: "Enterprise-grade Java backend with modern React frontend",
                    useCase: "Large-scale enterprise applications",
                  },
                  {
                    name: "FastAPI + Remix",
                    description: "High-performance Python API with full-stack React framework",
                    useCase: "Data-intensive applications with real-time features",
                  },
                  {
                    name: "Express.js + React",
                    description: "Lightweight Node.js backend with flexible React frontend",
                    useCase: "Rapid prototyping and MVP development",
                  },
                  {
                    name: "Full-Stack Remix",
                    description: "Unified full-stack React framework with server-side rendering",
                    useCase: "Content-heavy applications with excellent SEO",
                  },
                ],
              },
              {
                title: "Independent Backend Systems",
                combinations: [
                  {
                    name: "Mobile API Backends",
                    description: "Dedicated APIs for Android and iOS applications",
                    useCase: "Native mobile app development",
                  },
                  {
                    name: "Microservices Architecture",
                    description: "Distributed systems with independent, scalable services",
                    useCase: "Large applications requiring high availability",
                  },
                  {
                    name: "Third-Party Integrations",
                    description: "Backend systems that integrate with external services and APIs",
                    useCase: "Complex business process automation",
                  },
                  {
                    name: "Data Processing Pipelines",
                    description: "Backend systems for data ingestion, processing, and analytics",
                    useCase: "Business intelligence and reporting systems",
                  },
                ],
              },
            ].map((section, index) => (
              <Card key={index} className="backdrop-blur-xl bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.combinations.map((combo, idx) => (
                      <div key={idx} className="border-l-2 border-blue-400/30 pl-4">
                        <h4 className="text-lg font-semibold text-white mb-2">{combo.name}</h4>
                        <p className="text-white/70 text-sm mb-2">{combo.description}</p>
                        <div className="text-blue-300 text-xs font-medium">{combo.useCase}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Agile Delivery Process</h2>
            <p className="text-xl text-white/70">
              Accelerating innovation cycles and market entry through iterative delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Deep dive into your business objectives and technical requirements",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "Create scalable, secure system architecture and user experience design",
              },
              {
                step: "03",
                title: "Iterative Development",
                description: "Agile development with regular feedback loops and continuous integration",
              },
              {
                step: "04",
                title: "Launch & Optimize",
                description: "Market deployment with ongoing monitoring and performance optimization",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full backdrop-blur-xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center">
                  <span className="text-purple-300 font-bold text-lg">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-white/70 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Idea?</h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how our unified approach can accelerate your journey from concept to market-ready product
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                View Case Studies
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
              <p className="mt-1">Your trusted partner for blockchain and FinTech innovation.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
