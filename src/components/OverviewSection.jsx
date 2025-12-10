import Citation from "./Citation.jsx";

export default function OverviewSection() {
  return (
    <section className="section" id="overview">
      <div className="section-inner">
        <h2 className="section-title">What This Project Does</h2>
        <div className="section-divider" />

        <p className="section-text">
          <strong>Streetwear New York</strong> is a focused prototype from a
          larger project called <em>Streetwear Around the World</em>. Instead of
          skimming many cities, it goes deep into one: New York City
          <Citation to="src-rajendran" label="[2]" />.
        </p>
        <p className="section-text">
          Using mapping, timelines, and object-based storytelling, this project
          traces how four New York sites—the South Bronx, Harlem, SoHo, and the
          Brooklyn Museum—turned clothing into a language of identity, status,
          and power <Citation to="src-stephens" label="[3]" />.
        </p>

        <div className="pill-row">
          <div className="pill">
            🗺️ Map four neighborhoods: South Bronx, Harlem, SoHo, Brooklyn
          </div>
          <div className="pill">
            🧵 Read garments as evidence, not just outfits
          </div>
          <div className="pill">
            💰 Ask who profits when “streetwear” becomes a global business
          </div>
        </div>
      </div>
    </section>
  );
}
