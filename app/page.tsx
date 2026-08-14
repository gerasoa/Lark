import Link from "next/link";
import Image from "next/image";
import { lessons } from "./lessons";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/"><span className="brand-mark">L</span>Lark</Link>
        <nav aria-label="Main navigation"><a href="#lessons">Lessons</a><a href="#method">How it works</a><Link className="student-area-nav-link" href="/student-area">Student area</Link></nav>
        <a className="button button-dark" href="#lessons">Get started</a>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <span className="eyebrow">● English you can actually hear</span>
          <h1>Train your ear.<br /><em>Speak with confidence.</em></h1>
          <p>Learn English through short scenes, everyday vocabulary and questions that help you understand every detail.</p>
          <div className="hero-actions"><a className="button button-primary" href="#lessons">Explore lessons ↗</a><span><strong>3 lessons</strong><small>to start today</small></span></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="sound-card">
            <div className="sound-meta"><span>Daily conversation</span><span>02:48</span></div>
            <div className="sound-center"><button aria-label="Play demonstration">▶</button><div className="waveform">{[18,30,45,25,55,37,64,28,47,58,32,49,22].map((height,index)=><i key={index} style={{height}} />)}</div></div>
            <div className="sound-caption"><span>“Could I have a coffee to take away?”</span><b>B1</b></div>
          </div>
          <span className="floating word-one">listen</span><span className="floating word-two">repeat</span>
        </div>
      </section>

      <section className="lessons-section" id="lessons"><div className="shell">
        <div className="section-heading"><div><span className="kicker">Featured lessons</span><h2>Choose a scene.<br />Start listening.</h2></div><p>Each lesson combines video, context, essential vocabulary and a quick quiz. No waffle — just English in use.</p></div>
        <div className="lesson-grid">
          {lessons.map((lesson)=><article className="lesson-card" key={lesson.slug}>
            <Link className="lesson-card-link" href={`/lesson/${lesson.slug}`} aria-label={`Open lesson: ${lesson.title}`}>
              <div className="card-art">
                <Image className="card-cover" src={`/lesson-thumbnails/${lesson.videoId}.jpg`} alt={`${lesson.title} video cover`} width={1280} height={720} />
              </div>
              <div className="card-body"><div className="meta-row"><span>{lesson.level}</span><span>{lesson.duration}</span></div><h3>{lesson.title}</h3><p>{lesson.description}</p></div>
            </Link>
          </article>)}
        </div>
      </div></section>

      <section className="method shell" id="method"><div><span className="kicker">A simple method</span><h2>Listen. Understand.<br />Use it for real.</h2></div><div className="steps"><article><span>01</span><h3>Watch the scene</h3><p>Listen without subtitles and notice the rhythm, tone and context.</p></article><article><span>02</span><h3>Learn key phrases</h3><p>Review three useful expressions from the situation.</p></article><article><span>03</span><h3>Test your listening</h3><p>Answer the questions and check your understanding.</p></article></div></section>
      <section className="cta shell"><div><span className="eyebrow">Ready to begin?</span><h2>Your English comes alive<br />when you listen.</h2></div><a className="button button-light" href="#lessons">View lessons ↗</a></section>
      <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">L</span>Lark</Link><p>English through scenes, sound and context.</p><span>© 2026 Lark</span></footer>
    </main>
  );
}
