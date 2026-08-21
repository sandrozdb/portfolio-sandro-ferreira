"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUp, Award, BarChart3, BrainCircuit, BriefcaseBusiness, BriefcaseBusiness as Linkedin, ChevronRight, Code2, Code2 as Github, Database, ExternalLink, Mail, MapPin, Menu, Network, Search, Target, Users, Wrench, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { skillGroups } from "@/data/skills";
import type { Project } from "@/types";

const navItems = [
  ["Início", "inicio"], ["Sobre", "sobre"], ["Experiência", "experiencia"], ["Projetos", "projetos"],
  ["Competências", "competencias"], ["Formação", "formacao"], ["Certificações", "certificacoes"], ["Contato", "contato"],
];

const processSteps = [
  { label: "Problema", icon: Search }, { label: "Causas", icon: BrainCircuit }, { label: "Impactados", icon: Users },
  { label: "Dados / Evidências", icon: BarChart3 }, { label: "Solução", icon: Target }, { label: "Implementação", icon: Wrench },
  { label: "Indicadores", icon: Database }, { label: "Resultados", icon: Award },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={reduced ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55 }}>{children}</motion.div>;
}

function SectionHeading({ eyebrow, title, description, className = "" }: { eyebrow: string; title: string; description?: string; className?: string }) {
  return <div className={`section-heading ${className}`}><span>{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

function AssetImage({ src, alt, kind }: { src: string; alt: string; kind: "profile" | "project" }) {
  return <Image src={src} alt={alt} fill sizes={kind === "profile" ? "(max-width: 560px) calc(100vw - 44px), 400px" : "(max-width: 800px) calc(100vw - 28px), 560px"} quality={100} unoptimized className="asset-image" priority={kind === "profile"} />;
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card">
    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Ver ${project.title} no GitHub`}>
      <div className="project-cover"><AssetImage src={project.image} alt={`Capa do projeto ${project.title}`} kind="project" /><span className={`status ${project.status === "Em desenvolvimento" ? "progress" : ""}`}>{project.status}</span></div>
      <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div><span className="text-link"><Github size={17} /> Ver no GitHub <ExternalLink size={14} /></span></div>
    </a>
  </article>;
}

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-30% 0px -60%", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <header className="site-header"><div className="nav-shell"><a href="#inicio" className="brand" aria-label="Sandro Ferreira — início"><span>SF</span><strong>Sandro Ferreira</strong></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{navItems.map(([label, id]) => <a key={id} className={active === id ? "active" : ""} href={`#${id}`}>{label}</a>)}</nav>
      <a className="button small desktop-cv" href="/curriculo-sandro-ferreira.pdf" download>Baixar currículo</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</button>
    </div>{menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação mobile">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="button" href="/curriculo-sandro-ferreira.pdf" download>Baixar currículo</a></nav>}</header>

    <main id="conteudo">
      <section id="inicio" className="hero"><div className="hero-glow" /><div className="container hero-grid"><Reveal className="hero-copy"><span className="eyebrow">CONSULTORIA • IA • DADOS • AUTOMAÇÃO</span><h1>Sandro<br /><em>Ferreira</em></h1><p className="hero-lead">Transformo problemas reais em soluções com dados, inteligência artificial e automação.</p><p className="location"><MapPin size={16} /> Embu das Artes – SP</p><div className="hero-actions"><a className="button primary" href="#projetos">Ver projetos <ArrowRight size={17} /></a><a className="button icon" href="https://www.linkedin.com/in/sandrozdb/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Sandro Ferreira"><Linkedin size={18} /> LinkedIn</a><a className="button icon" href="https://github.com/sandrozdb" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Sandro Ferreira"><Github size={18} /> GitHub</a></div><a className="curriculum-link" href="/curriculo-sandro-ferreira.pdf" download>Baixar currículo <ChevronRight size={15} /></a></Reveal>
      <Reveal className="profile-wrap"><div className="profile-frame"><AssetImage src="/profile/sandro-ferreira.jpg" alt="Foto profissional de Sandro Ferreira" kind="profile" /></div><div className="profile-note"><span /><p>Tecnologia com<br /><strong>visão de negócio.</strong></p></div></Reveal></div>
      <div className="container stats" aria-label="Números de destaque">{[["8", "Projetos"], ["100k+", "Seguidores"], ["3", "Formações acadêmicas"], ["10", "Certificações"]].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</div></section>

      <section id="sobre" className="section about-section"><div className="container narrow"><Reveal><SectionHeading className="about-heading" eyebrow="01 — SOBRE MIM" title="Tecnologia aplicada para resolver problemas reais." /><p className="about-text">Sou estudante de Engenharia da Computação e de Inteligência Artificial e Automação Digital, com foco em usar dados, inteligência artificial e automação para resolver problemas reais de negócio. Minha trajetória combina experiência em infraestrutura tecnológica, formação como Oficial da Arma de Comunicações do Exército Brasileiro e a construção de uma marca digital com mais de 100 mil seguidores — vivências que fortaleceram minha visão analítica, comunicação, liderança e capacidade de execução.</p></Reveal></div></section>

      <section id="experiencia" className="section alt"><div className="container"><Reveal><SectionHeading eyebrow="02 — EXPERIÊNCIA" title="Experiências que conectam pessoas, dados e infraestrutura." /></Reveal><div className="timeline">{experiences.filter((item) => item.visible).map((item, index) => <Reveal key={item.organization} className="timeline-item"><div className="timeline-marker">0{index + 1}</div><div className="timeline-card"><div className="timeline-meta"><span>{item.period}</span><span><MapPin size={14} /> {item.location}</span></div><h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.description}</p><div className="tags">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></Reveal>)}</div></div></section>

      <section id="metodo" className="section"><div className="container"><Reveal><SectionHeading eyebrow="03 — COMO EU PENSO" title="Antes da tecnologia, vem o entendimento." description="Antes de escolher uma tecnologia, procuro entender o problema, suas causas, quem é impactado, quais evidências existem e como o resultado poderá ser medido." /></Reveal><Reveal className="process">{processSteps.map(({ label, icon: Icon }, index) => <div className="process-step" key={label}><div className="process-icon"><Icon size={20} /></div><span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong>{index < processSteps.length - 1 && <ArrowRight className="process-arrow" size={16} />}</div>)}</Reveal></div></section>

      <section id="projetos" className="section alt"><div className="container"><Reveal><SectionHeading eyebrow="04 — PROJETOS" title="Evidências de aprendizado aplicado." description="Projetos acadêmicos e práticos construídos para explorar problemas concretos, integrar tecnologias e medir resultados." /></Reveal><h3 className="group-title">Projetos em destaque</h3><div className="projects-grid featured">{projects.filter((p) => p.featured).map((p) => <Reveal key={p.title}><ProjectCard project={p} /></Reveal>)}</div><h3 className="group-title others">Outros projetos</h3><div className="projects-grid">{projects.filter((p) => !p.featured).map((p) => <Reveal key={p.title}><ProjectCard project={p} /></Reveal>)}</div></div></section>

      <section id="competencias" className="section"><div className="container"><Reveal><SectionHeading eyebrow="05 — COMPETÊNCIAS" title="Conhecimento construído em diferentes camadas." /></Reveal><div className="skills-grid">{skillGroups.map((group, index) => { const icons = [BrainCircuit, BarChart3, Code2, Network, BriefcaseBusiness]; const Icon = icons[index]; return <Reveal className="skill-card" key={group.title}><Icon size={22} /><h3>{group.title}</h3><div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>; })}</div></div></section>

      <section id="formacao" className="section alt"><div className="container"><Reveal><SectionHeading eyebrow="06 — FORMAÇÃO" title="Formação multidisciplinar em tecnologia." /></Reveal><div className="education-grid">{education.map((item) => <Reveal className="education-card" key={item.course}><div className="education-top"><span>{item.period}</span>{item.status && <b>{item.status}</b>}</div><h3>{item.course}</h3><h4>{item.institution}</h4><p>{item.description}</p></Reveal>)}</div></div></section>

      <section id="certificacoes" className="section"><div className="container"><Reveal><SectionHeading eyebrow="07 — CERTIFICAÇÕES" title="Aprendizado contínuo, com evidências verificáveis." /></Reveal><div className="cert-grid">{certifications.map((item) => <Reveal className="cert-card" key={item.name}><Award size={19} /><div><h3>{item.name}</h3><p>{item.institution} • {item.year}</p><a href={item.credential} target="_blank" rel="noopener noreferrer">Ver credencial <ExternalLink size={13} /></a></div></Reveal>)}</div></div></section>

      <section id="idiomas" className="section compact alt"><div className="container"><Reveal><SectionHeading eyebrow="08 — IDIOMAS" title="Comunicação" /></Reveal><div className="languages">{[["Português", "Nativo"], ["Inglês", "Intermediário"], ["Espanhol", "Intermediário"]].map(([language, level]) => <div key={language}><strong>{language}</strong><span>{level}</span></div>)}</div></div></section>

      <section id="contato" className="section contact"><div className="container contact-grid"><Reveal><span className="eyebrow">09 — CONTATO</span><h2>Vamos<br /><em>conversar?</em></h2></Reveal><Reveal className="contact-content"><p>Quer conversar sobre tecnologia, dados, inteligência artificial, automação ou projetos? Entre em contato.</p><div className="contact-links"><a href="mailto:sandrozdb@gmail.com"><Mail /> <span><small>E-mail</small>sandrozdb@gmail.com</span><ArrowRight /></a><a href="https://www.linkedin.com/in/sandrozdb/" target="_blank" rel="noopener noreferrer"><Linkedin /> <span><small>LinkedIn</small>/in/sandrozdb</span><ExternalLink /></a><a href="https://github.com/sandrozdb" target="_blank" rel="noopener noreferrer"><Github /> <span><small>GitHub</small>/sandrozdb</span><ExternalLink /></a></div></Reveal></div></section>
    </main>

    <footer><div className="container"><p>© 2026 Sandro Ferreira</p><div><a href="https://www.linkedin.com/in/sandrozdb/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/sandrozdb" target="_blank" rel="noopener noreferrer">GitHub</a><a href="mailto:sandrozdb@gmail.com">E-mail</a></div></div></footer>
    {showTop && <motion.button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} aria-label="Voltar ao topo"><ArrowUp size={19} /></motion.button>}
  </>;
}
