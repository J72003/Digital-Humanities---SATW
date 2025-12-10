export default function SiteSection({ site }) {
  const claim =
    site.question ||
    "How did this neighborhood shape the meaning of streetwear in New York?";

  const contextShort = site.narrative?.[0] || "";
  const contextLong = site.narrative?.slice(1) || [];

  return (
    <section className="section" id={site.id}>
      <div className="section-inner site-section">
        <div className="site-header">
          <p className="site-location">
            {site.neighborhoodLabel} · <span>{site.era}</span>
          </p>
          <h2 className="section-title">{site.title}</h2>
          <div className="section-divider" />
          <a href="#map" className="site-back-link">
            ← Back to city map
          </a>
        </div>

        <div className="exhibit-grid">
          <article className="exhibit-card">
            <p className="exhibit-kicker">Core Question</p>
            <h3 className="exhibit-title">{claim}</h3>
            <p className="exhibit-text">
              This section argues that {site.neighborhoodLabel} is not a backdrop
              for streetwear—it is a generator of meaning, style logic, and power.
            </p>
          </article>

          <article className="exhibit-card">
            <p className="exhibit-kicker">Context</p>
            <h3 className="exhibit-title">{site.era}</h3>
            {contextShort && (
              <p className="exhibit-text">{contextShort}</p>
            )}
            {contextLong.length > 0 && (
              <div className="exhibit-text-stack">
                {contextLong.map((p, i) => (
                  <p key={i} className="exhibit-text">{p}</p>
                ))}
              </div>
            )}
          </article>

          <article className="exhibit-card">
            <p className="exhibit-kicker">Concept Tags</p>
            <h3 className="exhibit-title">Themes in play</h3>
            <div className="site-keywords">
              {site.keywords?.map((kw) => (
                <span key={kw} className="keyword-pill">
                  {kw}
                </span>
              ))}
            </div>
            <p className="exhibit-text exhibit-text--muted">
              These tags will later drive filtering across cities when the
              project expands globally.
            </p>
          </article>

          <article className="exhibit-card exhibit-card--accent">
            <p className="exhibit-kicker">Garment as Evidence</p>
            <h3 className="exhibit-title">{site.garmentLabel}</h3>
            <p className="exhibit-text">{site.garmentCaption}</p>
            <p className="exhibit-text exhibit-text--muted">
              Future version: link this to archival photos, museum records,
              oral histories, and lookbook scans.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
