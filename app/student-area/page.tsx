import Link from "next/link";

export default function StudentAreaPage() {
  return <>
    <header className="site-header">
      <Link className="brand" href="/"><span className="brand-mark">L</span>Lark</Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/#lessons">Lessons</Link>
        <Link className="student-area-nav-link" href="/student-area" aria-current="page">Student area</Link>
      </nav>
      <Link className="button button-dark" href="/#lessons">View lessons</Link>
    </header>
    <main className="student-area-page" />
  </>;
}
