import Citation from "./Citation.jsx";

export default function GarmentsSection({ garments }) {
  return (
    <section className="section" id="garments">
      <div className="section-inner">
        <h2 className="section-title">Garments as Evidence</h2>
        <div className="section-divider" />
        <p className="section-text">
          Each object here is treated as evidence. Together, these garments show
          how New York&apos;s streets turned sportswear, luxury symbols, and
          skate gear into a global language of style.
        </p>

        <div className="garments-grid">
          {garments.map((item) => (
            <div key={item.name} className="garment-card">
              <div className="garment-image-placeholder">
                <div className="garment-silhouette" />
                <span className="garment-label">{item.name}</span>
              </div>
              <div className="garment-body">
                <p className="garment-place">{item.placeEra}</p>
                <p className="garment-description">
                  {item.description}
                  {item.cites?.length ? (
                    <>
                      {" "}
                      {item.cites.map((c, i) => (
                        <Citation key={i} to={c} label={`[${i + 1}]`} />
                      ))}
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
