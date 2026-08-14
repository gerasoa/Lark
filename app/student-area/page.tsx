/* eslint-disable @next/next/no-html-link-for-pages */
const performanceIndex = 67;
const performanceWidth = `${performanceIndex}%`;

export default function StudentAreaPage() {
  return <>
    <header className="site-header">
      <a className="brand" href="/"><span className="brand-mark">L</span>Lark</a>
      <nav aria-label="Main navigation">
        <a href="/">Home</a>
        <a href="/#lessons">Lessons</a>
        <a className="student-area-nav-link" href="/student-area" aria-current="page">Student area</a>
      </nav>
      <a className="button button-dark" href="/#lessons">View lessons</a>
    </header>
    <main className="student-area-page">
      <section className="student-feedback shell">
        <header className="feedback-hero">
          <div>
            <span className="kicker">AI feedback preview</span>
            <h1>Your grammar progress</h1>
            <p>A simulated review based on your latest Grammar and Sentence Building activities.</p>
          </div>

          <aside className="performance-card" aria-label="Performance index">
            <div className="performance-heading"><span>Performance index</span><strong>{performanceIndex}%</strong></div>
            <div className="performance-track" role="progressbar" aria-valuenow={performanceIndex} aria-valuemin={0} aria-valuemax={100} aria-label={`${performanceIndex}% performance`}>
              <span style={{ width: performanceWidth }} />
            </div>
            <p>Preview score. Once connected, this will be calculated from your completed exercises.</p>
          </aside>
        </header>

        <div className="feedback-context">
          <div><span>Latest analysed lesson</span><strong>The IT Crowd | The New Manager (1)</strong></div>
          <span className="feedback-context-tag">Grammar + Sentence Building</span>
        </div>

        <section className="feedback-review" aria-labelledby="grammar-review-title">
          <div className="feedback-section-heading">
            <span className="kicker">Grammar review</span>
            <h2 id="grammar-review-title">What your answers show</h2>
          </div>
          <div className="feedback-grid">
            <article className="feedback-card feedback-improve">
              <span className="feedback-card-label">Improve · 01</span>
              <h3>Subject–verb agreement</h3>
              <p>You still sometimes choose a plural verb with a singular subject. In <em>“Jen has a lot of experience”</em>, Jen requires <strong>has</strong>, not <strong>have</strong>.</p>
              <div className="feedback-action"><strong>Next focus</strong><span>Practise he, she and it with verbs ending in <b>-s</b> or <b>-es</b>.</span></div>
            </article>

            <article className="feedback-card feedback-improve">
              <span className="feedback-card-label">Improve · 02</span>
              <h3>Verb patterns and complete sentences</h3>
              <p>Your meaning is clear, but sentences need the correct verb pattern and connecting words: <em>“Have you tried turning it off?”</em> and <em>“Roy asks the caller to turn the computer off.”</em></p>
              <div className="feedback-action"><strong>Next focus</strong><span>Review <b>try + -ing</b> and <b>ask + person + to + verb</b>.</span></div>
            </article>

            <article className="feedback-card feedback-strength">
              <span className="feedback-card-label">Now understood</span>
              <h3>Using “are” with plural subjects</h3>
              <p>You can now recognise that <em>people</em> is plural in <em>“What are they like?”</em>. This was previously difficult, but your recent answers show that you understand when to choose <strong>are</strong> instead of <strong>is</strong>.</p>
              <div className="feedback-action"><strong>Progress</strong><span>You are applying this rule consistently in questions.</span></div>
            </article>
          </div>
        </section>

        <section className="feedback-next-step">
          <span>Recommended next step</span>
          <div><h2>Build accuracy through short contrasts.</h2><p>Compare one singular and one plural example, then rewrite each sentence as a question.</p></div>
          <a className="button button-primary" href="/lesson/coffee-to-go">Review the lesson</a>
        </section>
      </section>
    </main>
  </>;
}
