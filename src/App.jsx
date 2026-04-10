import './App.css'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">React + Vite + GitHub Pages</p>
        <h1>GBTI 静态前端页面</h1>
        <p className="hero-copy">
          这是一个可以直接部署到 GitHub Pages 的 React 单页模板，适合先把页面发上去，后面再继续加内容。
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="https://pages.github.com/" target="_blank" rel="noreferrer">
            GitHub Pages 文档
          </a>
          <a className="secondary-action" href="https://vite.dev/guide/static-deploy.html" target="_blank" rel="noreferrer">
            Vite 部署说明
          </a>
        </div>
      </section>

      <section className="info-grid" aria-label="site highlights">
        <article className="info-card">
          <h2>开发体验</h2>
          <p>本地开发用 `npm run dev`，改代码会即时刷新，适合先快速搭页面。</p>
        </article>

        <article className="info-card">
          <h2>静态部署</h2>
          <p>构建产物会输出到 `dist/`，天然适合 GitHub Pages 这种静态托管。</p>
        </article>

        <article className="info-card">
          <h2>后续扩展</h2>
          <p>你可以继续往这里加导航、介绍模块、作品展示、表单或数据可视化。</p>
        </article>
      </section>
    </main>
  )
}

export default App
