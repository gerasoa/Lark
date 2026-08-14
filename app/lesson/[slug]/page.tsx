/* eslint-disable @next/next/no-html-link-for-pages */
import { notFound } from "next/navigation";
import { getLesson, lessons } from "../../lessons";
import ComprehensionExercise from "../../comprehension-exercise";
import GrammarExercise from "../../grammar-exercise";
import SentenceBuildingExercise from "../../sentence-building-exercise";
import AudioClipPlayer from "../../audio-clip-player";

export function generateStaticParams() { return lessons.map(({ slug }) => ({ slug })); }

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const lesson = getLesson((await params).slug);
  if (!lesson) notFound();

  const videoParameters = new URLSearchParams();
  if (lesson.videoStart !== undefined) videoParameters.set("start", String(lesson.videoStart));
  if (lesson.videoEnd !== undefined) videoParameters.set("end", String(lesson.videoEnd));
  const videoQuery = videoParameters.toString();
  const videoUrl = `https://www.youtube-nocookie.com/embed/${lesson.videoId}${videoQuery ? `?${videoQuery}` : ""}`;

  return <main className="lesson-page">
    <header className="site-header lesson-header">
      <a className="brand" href="/"><span className="brand-mark">L</span>Lark</a>
      <a className="back-link" href="/#lessons">← All lessons</a>
    </header>

    <section className="lesson-hero shell">
      <div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>Lessons</span><span>/</span><strong>{lesson.title}</strong></div>
      <div className="lesson-title-row"><div><span className="eyebrow">● {lesson.category}</span><h1>{lesson.title}</h1><p>{lesson.description}</p></div><div className="lesson-stats"><span><small>Level</small>{lesson.level}</span><span><small>Length</small>{lesson.duration}</span></div></div>
    </section>

    <section className="lesson-content shell">
      <div className="lesson-main">
        <div className="video-frame"><iframe src={videoUrl} title={`Video for the lesson ${lesson.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

        <article className="lesson-block"><div className="block-number">01</div><div className="block-content"><span className="kicker">Instructions</span><h2>Before you begin</h2><ol className="directions-list">{lesson.directions.map((item,index)=><li key={item}><span>{index + 1}</span><p>{item}</p></li>)}</ol></div></article>

        <article className="lesson-block questions-block"><div className="block-number">03</div><div className="block-content"><span className="kicker">Comprehension check</span><h2>Test your understanding</h2><p className="block-lead">Choose the best answer to each question.</p>
          <ComprehensionExercise questions={lesson.questions} />
        </div></article>

        {lesson.grammarExercises && <article className="lesson-block grammar-block"><div className="block-number">04</div><div className="block-content"><span className="kicker">Grammar</span><h2>Choose the correct form</h2><p className="block-lead">Select the word that completes each sentence correctly.</p>
          <GrammarExercise exercises={lesson.grammarExercises} />
        </div></article>}

        {lesson.sentenceBuilding && <article className="lesson-block sentence-building-block"><div className="block-number">05</div><div className="block-content"><span className="kicker">Sentence Building</span><h2>Build the sentence</h2><p className="block-lead">Use the words below. You may change their form or add connecting words, but keep the original order.</p>
          <SentenceBuildingExercise exercises={lesson.sentenceBuilding} />
        </div></article>}

        {lesson.scriptScenes && <article className="lesson-block script-block"><div className="block-number">06</div><div className="block-content"><span className="kicker">Transcript</span><h2>Script</h2><p className="block-lead">Read the dialogue from the episode and notice how each character speaks.</p>
          <div className="script-scenes">{lesson.scriptScenes.map((scene,sceneIndex)=><section className="script-scene" aria-label={`Scene ${sceneIndex + 1}`} key={`scene-${sceneIndex + 1}`}><h3>Scene {String(sceneIndex + 1).padStart(2,"0")}</h3>{scene.map((line,lineIndex)=><div className="script-line" key={`${line.speaker}-${lineIndex}`}><strong>{line.speaker}</strong><p>{line.text}</p></div>)}</section>)}</div>
        </div></article>}
        {lesson.audioClip && <article className="lesson-block audio-clip-block"><div className="block-number">07</div><div className="block-content"><span className="kicker">Listening focus</span><h2>Listen to the short clip</h2><p className="block-lead">Play the audio and notice how the words connect in natural speech.</p>
          <AudioClipPlayer videoId={lesson.videoId} start={lesson.audioClip.start} end={lesson.audioClip.end} transcript={lesson.audioClip.transcript} />
        </div></article>}
      </div>

      <aside className="lesson-sidebar">
        <article className="vocab-card"><div className="vocab-heading"><span className="block-number">02</span><div><span className="kicker">Vocabulary</span><h2>3 key phrases</h2></div></div><div className="vocab-list">{lesson.vocabulary.map((item,index)=><div className="vocab-item" key={item.word}><div className="vocab-word"><span>{String(index + 1).padStart(2,"0")}</span><h3>{item.word}</h3></div><p>{item.meaning}</p><em>“{item.example}”</em></div>)}</div></article>
        <div className="practice-card"><span>◎</span><div><strong>Practice tip</strong><p>Repeat each sentence aloud, copying the rhythm and intonation.</p></div></div>
      </aside>
    </section>

    <section className="next-lesson shell"><span>Keep learning</span><a href="/#lessons">Choose another lesson <b>→</b></a></section>
    <footer className="footer shell"><a className="brand" href="/"><span className="brand-mark">L</span>Lark</a><p>English through scenes, sound and context.</p><span>© 2026 Lark</span></footer>
  </main>;
}
