/* eslint-disable @next/next/no-html-link-for-pages */
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
    <main className="student-area-page" />
  </>;
}
