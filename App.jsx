import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter } from 'lucide-react'
import './App.css'

// Import images
import sglabLogo from './assets/sglab_logo.png'
import heroImage from './assets/Qo8fj9ScP6Ag.jpg'
import bioinformaticsLab from './assets/x9uDqKtV6eTo.jpg'
import mlBiology from './assets/sfNziaYMFcsb.png'
import compBiology from './assets/AGmGLnVEVpa8.jpeg'
import panamaUniversity from './assets/F7Qf0TwnMex1.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const researchAreas = [
    {
      title: "Biomarker Discovery",
      description: "Discovery of biomarkers and biopatterns in biological fluids using advanced computational methods.",
      icon: "🧬"
    },
    {
      title: "Machine Learning in Spectroscopy",
      description: "Applying ML and multivariate analysis to spectral signals including Mass Spectrometry and Near-infrared Spectroscopy.",
      icon: "📊"
    },
    {
      title: "Smart Devices for m-Health",
      description: "Development of intelligent mobile health devices and applications for medical diagnostics.",
      icon: "📱"
    },
    {
      title: "Systems Biology",
      description: "Knowledge representation and computational approaches in systems biology research.",
      icon: "🔬"
    }
  ]

  const publications = [
    {
      title: "Application of near-infrared spectroscopy and chemoinformatic analyses to biological fluids",
      type: "PhD Thesis",
      year: "2014",
      venue: "McGill University"
    },
    {
      title: "Large Scale Identification of Transcription Factor Binding Sites in DNA Sequences",
      type: "MSc Thesis", 
      year: "2010",
      venue: "McGill University"
    },
    {
      title: "Using Deep Convolutional Networks for the Automatic Recognition of MacroInvertebrate in Rivers",
      type: "Conference Paper",
      year: "2018",
      venue: "NeurIPS"
    }
  ]

  const teamMembers = [
    {
      name: "Dr. Javier E. Sanchez-Galan",
      role: "Principal Investigator",
      description: "PhD in Experimental Medicine, McGill University. Bio/chemo-informatician specializing in computational approaches for biology, chemistry and medicine.",
      image: "/api/placeholder/150/150"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src={sglabLogo} alt="SGLab Logo" className="h-10 w-10" />
              <span className="text-xl font-bold text-primary">SGLab</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'research', 'publications', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-primary transition-colors ${
                    activeSection === section ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md hover:bg-accent"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {['home', 'about', 'research', 'publications', 'team', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:bg-accent rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Bridging <span className="text-primary">AI</span> and{' '}
                <span className="text-green-600">Biology</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                SGLab focuses on innovative computational approaches for biology, chemistry, and medicine. 
                We develop cutting-edge solutions at the intersection of artificial intelligence and biological sciences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('research')} size="lg" className="text-lg px-8">
                  Explore Research
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI and Biology Research" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About SGLab</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our mission is to advance scientific knowledge through innovative computational approaches 
              that bridge artificial intelligence and biological sciences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                SGLab is dedicated to developing innovative approaches for bridging computational and data analysis 
                methods with biology, chemistry, and medicine. We focus on discovering biomarkers, applying machine 
                learning to spectral analysis, and creating smart solutions for healthcare.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-6">Research Focus</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Bioinformatics</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Chemometrics</Badge>
                  <Badge variant="secondary">Computational Science</Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Systems Biology</Badge>
                  <Badge variant="secondary">m-Health</Badge>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={panamaUniversity} 
                alt="Universidad Tecnológica de Panamá" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Research Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research spans multiple disciplines, combining computational methods with biological insights 
              to solve complex scientific challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {area.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src={bioinformaticsLab} 
                alt="Bioinformatics Laboratory" 
                className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Laboratory Research</h3>
              <p className="text-muted-foreground">
                State-of-the-art computational facilities for bioinformatics research.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={mlBiology} 
                alt="Machine Learning in Biology" 
                className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-muted-foreground">
                Advanced machine learning techniques for biological data interpretation.
              </p>
            </div>
            <div className="text-center">
              <img 
                src={compBiology} 
                alt="Computational Biology" 
                className="rounded-lg shadow-md w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Computational Methods</h3>
              <p className="text-muted-foreground">
                Innovative computational approaches for biological problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Publications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our research contributions to the scientific community through publications, 
              theses, and conference presentations.
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Badge variant="outline">{pub.type}</Badge>
                        <span>{pub.venue}</span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="mt-4 md:mt-0">
                      <ExternalLink size={16} className="mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the researchers and students driving innovation at SGLab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-4xl">👨‍🔬</span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
            
            {/* Placeholder for current students */}
            <Card className="text-center border-dashed border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-4xl">👩‍🎓</span>
                </div>
                <CardTitle className="text-xl">Current Students</CardTitle>
                <Badge variant="outline" className="mx-auto">PhD & MSc Students</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join our research team and contribute to cutting-edge AI and biology research.
                </CardDescription>
                <Button variant="outline" size="sm" className="mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-dashed border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <CardTitle className="text-xl">Alumni</CardTitle>
                <Badge variant="outline" className="mx-auto">Former Lab Members</Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our graduates continue to make impacts in academia and industry worldwide.
                </CardDescription>
                <Button variant="outline" size="sm" className="mt-4">
                  View Alumni
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch to learn more about our research, collaboration opportunities, 
              or joining our team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>
                  We welcome inquiries from students, researchers, and potential collaborators.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">javier.sanchezgalan@utp.ac.pa</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(507) 290-8469 | (507) 290-8417</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      Centro de Producción e Investigaciones Agroindustriales (CEPIA)<br />
                      Universidad Tecnológica de Panamá<br />
                      Panama City, Panama
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Research Opportunities</CardTitle>
                <CardDescription>
                  Interested in joining our research team or collaborating with us?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are always looking for motivated students and researchers interested in:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• PhD and MSc research positions</li>
                  <li>• Undergraduate research projects</li>
                  <li>• Postdoctoral fellowships</li>
                  <li>• International collaborations</li>
                </ul>
                <Button className="w-full mt-6">
                  <Mail className="mr-2" size={16} />
                  Contact for Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={sglabLogo} alt="SGLab Logo" className="h-8 w-8" />
                <span className="text-xl font-bold">SGLab</span>
              </div>
              <p className="text-primary-foreground/80">
                Advancing science through innovative computational approaches at the intersection 
                of artificial intelligence and biology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {['Research', 'Publications', 'Team', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block hover:text-primary-foreground/80 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Affiliations</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Universidad Tecnológica de Panamá</p>
                <p>GIBBS Research Group</p>
                <p>CEPIA</p>
                <p>INDICASAT-AIP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © 2025 SGLab - Universidad Tecnológica de Panamá. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

