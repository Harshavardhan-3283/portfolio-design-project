"use client";

import Image from "next/image";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, ExternalLink, Menu, X, Brain, LineChart, GraduationCap, School, BookOpen, MapPin, Calendar, Phone, Award } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = useMemo(
    () => [
      {
        title: "Voyago – AI-Powered Personalized Travel Planner",
        tagline: "Your smart companion for effortless and personalized travel planning.",
        description:
          "Built a full-stack React and Spring Boot app for seamless trip management — integrating buses, trains, flights, and cars with real-time route mapping and smart recommendations. Crafted an elegant UI/UX using React.js and Next.js, adding features like Swiggy/Zomato-style food ordering and Ola/Rapido ride options.",
        tech: ["React.js", "Next.js", "Spring Boot", "MySQL", "REST APIs", "JWT Auth", "Google Maps API", "Git", "HTML", "CSS"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/aa4ce466-3bf4-44bc-aa54-442f124a827b/generated_images/modern-luxury-travel-planning-interface--b1722f33-20251008100439.jpg",
        links: {
          repo: "https://github.com/Harshavardhan-3283/Travel-eazy",
        },
      },
      {
        title: "Agentic AI – Smart PDF Receipt Data Extractor",
        tagline: "Turning unstructured receipts into structured insights with AI precision.",
        description:
          "Developed an AI tool that automates data extraction from PDF receipts using OCR and pattern recognition. The app identifies key fields (vendor, amount, date) and organizes them into exportable tables. Designed in Streamlit with batch upload, preview, and CSV export functionality.",
        tech: ["Python", "Streamlit", "OCR (Tesseract)", "Regex", "Pandas", "NumPy"],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/aa4ce466-3bf4-44bc-aa54-442f124a827b/generated_images/ai-powered-document-processing-visualiza-0078f9fa-20251008100447.jpg",
        links: {
          repo: "https://github.com/Harshavardhan-3283/Bill-Agent",
        },
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      { name: 'HTML', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Java', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Machine Learning', type: 'icon', icon: LineChart },
      { name: 'Artificial Intelligence', type: 'icon', icon: Brain },
      { name: 'Streamlit', type: 'img', src: 'https://www.vectorlogo.zone/logos/streamlitio/streamlitio-icon.svg' },
      { name: 'MySQL', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Spring Boot', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
      { name: 'Git', type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    ],
    []
  );

  const education = useMemo(
    () => [
      {
        degree: "Bachelor of Technology",
        institution: "Usha Rama College of Engineering and Technology",
        location: "Telaprolu, India",
        period: "2021 – 2025",
        icon: GraduationCap,
      },
      {
        degree: "Intermediate (MPC)",
        institution: "Sri Chaitanya Junior College",
        location: "Eluru, India",
        period: "2019 – 2021",
        icon: School,
      },
      {
        degree: "Secondary School (SSC)",
        institution: "Sri Nalanda High School",
        location: "Eluru, India",
        period: "2018 – 2019",
        icon: BookOpen,
      },
    ],
    []
  );

  const certifications = useMemo(
    () => [
      {
        title: "Data Science and Data Analytics Internship",
        organization: "Held in Hyderabad",
        duration: "November 2024 – April 2025",
        location: "Hyderabad",
        certificateUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot-2025-10-09-125318-1760071173994.png",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        title: "Blockchain and Its Applications",
        organization: "NPTEL",
        duration: "April 2024",
        certificateUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Blockchain-and-its-Applications-1760071181194.pdf",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/NPTEL_logo.png",
      },
      {
        title: "Introduction to Industry 4.0 and Industrial Internet of Things",
        organization: "NPTEL",
        duration: "October 2023",
        certificateUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IOT-1760071196168.pdf",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/NPTEL_logo.png",
      },
      {
        title: "Google AI ML Virtual Internship",
        organization: "Google, AICTE",
        duration: "December 2022 – February 2023",
        certificateUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/AIML-1760071206370.pdf",
        logo: "https://www.gstatic.com/images/branding/product/1x/googleg_512dp.png",
      },
      {
        title: "AWS Cloud Virtual Internship",
        organization: "Amazon, AICTE",
        duration: "September 2023 – November 2023",
        certificateUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/AWS-Cloud-Virtual-internship-1760071233565.pdf",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        title: "Artificial Intelligence: Human-Computer Interaction Methodologies",
        organization: "Infosys Springboard",
        duration: "April 14, 2023",
        certificateUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Artificial-Intelligence-1760071282033.pdf",
        logo: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo-svg.svg",
      },
    ],
    []
  );

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            className="flex items-center gap-2"
            onClick={() => scrollTo("hero")}
            aria-label="Go to top"
          >
            <span className="font-semibold">Harshavardhan Kondasani</span>
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button className="hover:text-primary transition-colors" onClick={() => scrollTo("hero")}>Home</button>
            <button className="hover:text-primary transition-colors" onClick={() => scrollTo("skills")}>Skills</button>
            <button className="hover:text-primary transition-colors" onClick={() => scrollTo("projects")}>Projects</button>
            <button className="hover:text-primary transition-colors" onClick={() => scrollTo("education")}>Education</button>
            <button className="hover:text-primary transition-colors" onClick={() => scrollTo("certifications")}>Certifications</button>
            <button className="hover:text-primary transition-colors" onClick={() => scrollTo("contact")}>Contact</button>
            <a
              href="mailto:harshavardhan3283@gmail.com"
              className="inline-flex items-center gap-2 text-sm hover:text-primary"
            >
              <Mail className="size-4" /> Email
            </a>
          </nav>

          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={() => setMenuOpen((s) => !s)} aria-label="Toggle menu">
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2">
              <button className="py-1 text-left" onClick={() => scrollTo("hero")}>Home</button>
              <button className="py-1 text-left" onClick={() => scrollTo("skills")}>Skills</button>
              <button className="py-1 text-left" onClick={() => scrollTo("projects")}>Projects</button>
              <button className="py-1 text-left" onClick={() => scrollTo("education")}>Education</button>
              <button className="py-1 text-left" onClick={() => scrollTo("certifications")}>Certifications</button>
              <button className="py-1 text-left" onClick={() => scrollTo("contact")}>Contact</button>
              <a className="py-1 text-left hover:text-primary" href="mailto:harshavardhan3283@gmail.com"><span className="inline-flex items-center gap-2"><Mail className="size-4" /> Email</span></a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid grid-cols-1 gap-10 items-center">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Hi, I'm Harsha Vardhan 👋
              </h1>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-primary">
                A Passionate AI Enthusiast & Software Developer
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                I design and develop intelligent, user-centric applications combining modern web technologies and AI-powered automation.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button onClick={() => scrollTo("projects")}>View My Projects</Button>
                <Button variant="outline" asChild>
                  <a href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/harshavardhan_resume-1759918894891.pdf" download="Harshavardhan_Resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/Harshavardhan-3283" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <Github className="size-4" /> GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/harshavardhan-kondasani-107355346/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                    <Linkedin className="size-4" /> LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="mailto:harshavardhan3283@gmail.com" className="inline-flex items-center gap-2">
                    <Mail className="size-4" /> Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl" />

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Skills</h2>
            <p className="mt-2 text-muted-foreground">Technologies and tools I work with</p>
          </motion.div>

          {/* Continuous scrolling marquee */}
          <div className="mt-8 overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {[...skills, ...skills].map((skill, idx) => (
                <Card key={`${skill.name}-${idx}`} className="h-full w-[160px] sm:w-[180px] flex-shrink-0">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="size-14 sm:size-16 rounded-md bg-muted/50 ring-1 ring-border flex items-center justify-center">
                      {skill.type === 'img' ? (
                        <Image
                          src={skill.src as string}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        (() => {
                          const Icon = (skill as any).icon as any;
                          return Icon ? <Icon className="size-8 text-foreground/80" /> : null;
                        })()
                      )}
                    </div>
                    <div className="text-sm font-medium">{skill.name}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl" />

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h2>
            <p className="mt-2 text-muted-foreground">A few things I've built recently.</p>
          </motion.div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group"
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image 
                        src={p.image} 
                        alt={p.title} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105" 
                      />
                    </div>
                  </CardContent>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl leading-tight">{p.title}</CardTitle>
                    <CardDescription className="text-base font-medium">{(p as any).tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto flex items-center gap-3 pt-0">
                    <Button asChild size="sm" className="flex-1 transition-all hover:scale-105">
                      <a href={p.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                        <Github className="size-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl" />

        {/* Education Section */}
        <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">🎓 Education</h2>
            <p className="mt-2 text-muted-foreground">My academic journey and qualifications</p>
          </motion.div>

          <div className="mt-12 relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, idx) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="relative md:pl-20">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                        <div className="size-16 rounded-full bg-primary/10 ring-4 ring-background flex items-center justify-center">
                          <Icon className="size-8 text-primary" />
                        </div>
                      </div>

                      <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            {/* Mobile icon */}
                            <div className="md:hidden size-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="size-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl font-bold">{edu.degree}</CardTitle>
                              <CardDescription className="text-base font-medium mt-1">
                                {edu.institution}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="size-4 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="size-4 flex-shrink-0" />
                            <span>{edu.period}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl" />

        {/* Certifications & Internships Section */}
        <section id="certifications" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight flex items-center gap-3">
              <Award className="size-8 text-primary" />
              Certifications & Internships
            </h2>
            <p className="mt-2 text-muted-foreground">Professional certifications and training programs</p>
          </motion.div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="size-12 rounded-lg bg-muted/50 ring-1 ring-border flex items-center justify-center flex-shrink-0 p-2">
                        <Image
                          src={cert.logo}
                          alt={cert.organization}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-sm font-medium">
                      {cert.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3 flex-1 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="size-4 flex-shrink-0" />
                      <span>{cert.duration}</span>
                    </div>
                    {cert.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="size-4 flex-shrink-0" />
                        <span>{cert.location}</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="mt-auto pt-0">
                    <Button asChild size="sm" className="w-full transition-all hover:scale-105">
                      <a 
                        href={cert.certificateUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="size-4" />
                        View Certificate
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="mx-auto max-w-6xl" />

        {/* Contact Section */}
        <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-2 text-muted-foreground">
              Feel free to reach out through any of these channels.
            </p>
          </motion.div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Let's connect and collaborate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="flex-1 min-w-[200px] transition-all hover:scale-105">
                    <a href="mailto:harshavardhan3283@gmail.com" className="inline-flex items-center justify-center gap-2">
                      <Mail className="size-4" />
                      harshavardhan3283@gmail.com
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 min-w-[200px] transition-all hover:scale-105">
                    <a href="https://www.linkedin.com/in/harshavardhan-kondasani-107355346/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2">
                      <Linkedin className="size-4" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 min-w-[200px] transition-all hover:scale-105">
                    <a href="tel:+919381633959" className="inline-flex items-center justify-center gap-2">
                      <Phone className="size-4" />
                      +91 9381633959
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Harshavardhan Kondasani. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:harshavardhan3283@gmail.com" className="hover:text-foreground inline-flex items-center gap-2"><Mail className="size-4" /> Email</a>
            <a href="https://github.com/Harshavardhan-3283" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2"><Github className="size-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/harshavardhan-kondasani-107355346/" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2"><Linkedin className="size-4" /> LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}