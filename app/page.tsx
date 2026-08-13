import Link from "next/link";
import { lessons } from "./lessons";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">E</span>Echo English</Link>
        <nav aria-label="Navegação principal"><a href="#lessons">Aulas</a><a href="#method">Como funciona</a></nav>
        <a className="button button-dark" href="#lessons">Começar agora</a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <span className="eyebrow">● Inglês que você realmente escuta</span>
          <h1>Treine seu ouvido.<br /><em>Fale com confiança.</em></h1>
          <p>Aprenda inglês com cenas curtas, vocabulário do dia a dia e perguntas que ajudam você a entender cada detalhe.</p>
          <div className="hero-actions"><a className="button button-primary" href="#lessons">Explorar aulas ↗</a><span><strong>3 aulas</strong><small>para começar hoje</small></span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="sound-card">
            <div className="sound-meta"><span>Daily conversation</span><span>02:48</span></div>
            <div className="sound-center"><button aria-label="Reproduzir demonstração">▶</button><div className="waveform">{[18,30,45,25,55,37,64,28,47,58,32,49,22].map((height,index)=><i key={index} style={{height}} />)}</div></div>
            <div className="sound-caption"><span>“Could I get a coffee to go?”</span><b>B1</b></div>
          </div>
          <span className="floating word-one">listen</span><span className="floating word-two">repeat</span>
        </div>
      </section>

      <section className="lessons-section" id="lessons"><div className="shell">
        <div className="section-heading"><div><span className="kicker">Aulas em destaque</span><h2>Escolha uma cena.<br />Comece a escutar.</h2></div><p>Cada aula combina vídeo, contexto, palavras essenciais e um quiz rápido. Sem enrolação — apenas inglês em uso.</p></div>
        <div className="lesson-grid">
          {lessons.map((lesson,index)=><article className={`lesson-card card-${index + 1}`} key={lesson.slug}>
            <div className="card-art"><span>0{index + 1}</span><b>{lesson.icon}</b><small>{lesson.category}</small></div>
            <div className="card-body"><div className="meta-row"><span>{lesson.level}</span><span>{lesson.duration}</span></div><h3>{lesson.title}</h3><p>{lesson.description}</p><Link href={`/lesson/${lesson.slug}`}>Abrir aula <span>→</span></Link></div>
          </article>)}
        </div>
      </div></section>

      <section className="method shell" id="method"><div><span className="kicker">Método simples</span><h2>Ouça. Entenda.<br />Use de verdade.</h2></div><div className="steps"><article><span>01</span><h3>Assista à cena</h3><p>Escute sem legendas e perceba ritmo, tom e contexto.</p></article><article><span>02</span><h3>Aprenda palavras</h3><p>Revise três expressões úteis da situação.</p></article><article><span>03</span><h3>Teste seu ouvido</h3><p>Responda perguntas e confira sua compreensão.</p></article></div></section>
      <section className="cta shell"><div><span className="eyebrow">Pronto para começar?</span><h2>Seu inglês ganha vida<br />quando você escuta.</h2></div><a className="button button-light" href="#lessons">Ver as aulas ↗</a></section>
      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">E</span>Echo English</Link><p>Um mock-up de aprendizagem por escuta.</p><span>© 2026 Echo English</span></footer>
    </main>
  );
}
