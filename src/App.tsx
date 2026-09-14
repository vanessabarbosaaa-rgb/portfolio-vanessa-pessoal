import { useState } from 'react'

type Project = {
  title: string
  description: string
  tag: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'SQEducaPlay',
    description:
      'Plataforma de gamificação educacional pensada para escolas municipais, com jogos, quizzes, pontuação, rankings e relatórios.',
    tag: 'Projeto acadêmico',
  },
  {
    title: 'Portfólio Web',
    description:
      'Site responsivo desenvolvido com React, TypeScript e CSS, com foco em organização, acessibilidade e boa experiência em telas pequenas.',
    tag: 'Front-end',
  },
  {
    title: 'Estudos em Engenharia de Software',
    description:
      'Prática contínua de desenvolvimento, requisitos, lógica de programação, interfaces e construção de soluções digitais.',
    tag: 'Aprendizado',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          VB<span>.</span>
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegação principal">
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">ENGENHARIA DE SOFTWARE · FRONT-END</p>
            <h1 className="pulse">Olá, eu sou Vanessa<span>.</span></h1>
            <p className="hero-text">
              Estudante de Engenharia de Software apaixonada por tecnologia,
              interfaces e pela criação de soluções digitais que façam sentido para as pessoas.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projetos">Ver projetos</a>
              <a className="button secondary" href="#contato">Entrar em contato</a>
            </div>
          </div>

          <div className="hero-media">
            <div className="photo-frame">
              <img
                src="/profile.svg"
                alt="Imagem de apresentação de Vanessa Barbosa"
              />
              <div className="photo-label">VANESSA BARBOSA</div>
            </div>
            <div className="floating-card">
              <span>✦</span>
              Em constante evolução
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">01 · SOBRE</p>
            <h2>Construindo meu caminho na tecnologia.</h2>
          </div>
          <div className="about-content">
            <p>
              Sou estudante de <strong>Engenharia de Software</strong> na Universidade de
              Vassouras, campus Saquarema. Tenho interesse em desenvolvimento front-end,
              criação de interfaces e experiências digitais.
            </p>
            <p>
              Busco ampliar meus conhecimentos, transformar ideias em projetos reais e
              conquistar oportunidades para aprender cada vez mais na área de tecnologia.
            </p>
          </div>
        </section>

        <section className="section projects" id="projetos">
          <div className="section-heading">
            <p className="eyebrow">02 · PROJETOS & HABILIDADES</p>
            <h2>O que estou criando e aprendendo.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="card-number">0{index + 1}</div>
                <p className="tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>

          <div className="skills">
            <span>React</span>
            <span>TypeScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
            <span>UI responsiva</span>
          </div>
        </section>

        <section className="section media-section" aria-labelledby="media-title">
          <div className="section-heading">
            <p className="eyebrow">03 · MÍDIA</p>
            <h2 id="media-title">Um pouco do meu universo.</h2>
          </div>

          <div className="media-grid">
            <div className="media-card">
              <img
                src="/profile.svg"
                alt="Ilustração de apresentação para o portfólio"
              />
              <div>
                <span className="media-caption">IMAGEM</span>
                <p>Identidade visual simples, moderna e com personalidade.</p>
              </div>
            </div>

            <div className="media-card video-card">
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/Ke90Tje7VS0"
                  title="Vídeo introdutório sobre React"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div>
                <span className="media-caption">VÍDEO</span>
                <p>Conteúdo relacionado à tecnologia que faz parte dos meus estudos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contato">
          <div>
            <p className="eyebrow">04 · CONTATO</p>
            <h2>Vamos conversar?</h2>
            <p>
              Estou aberta a conexões, oportunidades e projetos que possam contribuir
              para minha evolução profissional.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:seuemail@exemplo.com">✉ <span>seuemail@exemplo.com</span></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">⌘ <span>GitHub</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in <span>LinkedIn</span></a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Vanessa Barbosa</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  )
}

export default App
