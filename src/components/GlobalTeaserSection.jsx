export default function GlobalTeaserSection() {
  return (
    <section className="section" id="global">
      <div className="section-inner">
        <h2 className="section-title">From New York to the World</h2>
        <div className="section-divider" />
        <p className="section-text">
          New York is one city in a global network of streetwear cultures. The
          same methods used here—mapping neighborhoods, reading garments as
          evidence, and tracing timelines—can be applied to other places where
          music, migration, and fashion collide.
        </p>

        <div className="global-tags">
          <span className="global-tag global-tag--inactive">Tokyo · Harajuku</span>
          <span className="global-tag global-tag--inactive">Lagos · Afrobeats</span>
          <span className="global-tag global-tag--inactive">São Paulo · Skate & Bootlegs</span>
          <span className="global-tag global-tag--inactive">London · Grime & Garms</span>
          <span className="global-tag global-tag--inactive">Johannesburg · Street Scenes</span>
        </div>

        <p className="section-text">
          This prototype focuses on New York as a detailed case study. In the
          larger project, lines will extend from this city to others, following
          garments, music videos, and images as they travel across borders and
          get remixed along the way.
        </p>
      </div>
    </section>
  );
}
