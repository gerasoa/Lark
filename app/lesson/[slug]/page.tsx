import Link from "next/link";
import { notFound } from "next/navigation";
import { getLesson, lessons } from "../../lessons";

export function generateStaticParams() { return lessons.map(({ slug }) => ({ slug })); }

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const lesson = getLesson((await params).slug);
  if (!lesson) notFound();

  return <main className="lesson-page">
    <header className="site-header lesson-header">
      <Link className="brand" href="/"><span className="brand-mark">L</span>Lark</Link>
      <Link className="back-link" href="/#lessons">← Todas as aulas</Link>
    </header>

    <section className="lesson-hero shell">
      <div className="breadcrumbs"><Link href="/">Início</Link><span>/</span><span>Aulas</span><span>/</span><strong>{lesson.title}</strong></div>
      <div className="lesson-title-row"><div><span className="eyebrow">● {lesson.category}</span><h1>{lesson.title}</h1><p>{lesson.description}</p></div><div className="lesson-stats"><span><small>Nível</small>{lesson.level}</span><span><small>Duração</small>{lesson.duration}</span></div></div>
    </section>

    <section className="lesson-content shell">
      <div className="lesson-main">
        <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${lesson.videoId}`} title={`Vídeo da aula ${lesson.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

        <article className="lesson-block"><div className="block-number">01</div><div className="block-content"><span className="kicker">Directions</span><h2>Antes de começar</h2><ol className="directions-list">{lesson.directions.map((item,index)=><li key={item}><span>{index + 1}</span><p>{item}</p></li>)}</ol></div></article>

        <article className="lesson-block questions-block"><div className="block-number">03</div><div className="block-content"><span className="kicker">Comprehension check</span><h2>Teste sua compreensão</h2><p className="block-lead">Escolha a melhor resposta para cada pergunta.</p>
          <form className="quiz-form">{lesson.questions.map((question,index)=><fieldset key={question.prompt}><legend><span>{String(index + 1).padStart(2,"0")}</span>{question.prompt}</legend><div className="quiz-options">{question.options.map((option)=><label key={option}><input type="radio" name={`question-${index}`} /><span>{option}</span></label>)}</div></fieldset>)}</form>
          <details className="answer-key"><summary>Conferir respostas <span>＋</span></summary><ol>{lesson.questions.map((question)=><li key={question.prompt}>{question.answer}</li>)}</ol></details>
        </div></article>
      </div>

      <aside className="lesson-sidebar">
        <article className="vocab-card"><div className="vocab-heading"><span className="block-number">02</span><div><span className="kicker">Vocabulary</span><h2>3 palavras-chave</h2></div></div><div className="vocab-list">{lesson.vocabulary.map((item,index)=><div className="vocab-item" key={item.word}><div className="vocab-word"><span>{String(index + 1).padStart(2,"0")}</span><h3>{item.word}</h3></div><p>{item.meaning}</p><em>“{item.example}”</em></div>)}</div></article>
        <div className="practice-card"><span>◎</span><div><strong>Dica de prática</strong><p>Repita cada frase em voz alta, imitando o ritmo e a entonação.</p></div></div>
      </aside>
    </section>

    <section className="next-lesson shell"><span>Continue aprendendo</span><Link href="/#lessons">Escolher outra aula <b>→</b></Link></section>
    <footer className="footer shell"><Link className="brand" href="/"><span className="brand-mark">L</span>Lark</Link><p>Inglês em cenas, sons e contexto.</p><span>© 2026 Lark</span></footer>
  </main>;
}
