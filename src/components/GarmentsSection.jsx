import Citation from "./Citation.jsx";

const FILES = {
  "bronx-tracksuit": "bronx-tracksuit.jpg",
  "gold-rope-chain": "gold-rope-chain.jpg",
  "dapper-dan-jacket": "dapper-dan-jacket.jpg",
  "air-force-1": "air-force-1.jpg",
  "supreme-box-logo": "supreme-box-logo.jpg",
  "air-jordans-museum": "air-jordans-museum.jpg",
};

export default function GarmentsSection({ garments = [] }) {
  const base = import.meta.env.BASE_URL; 
  const getImg = (imgKey) =>
    imgKey && FILES[imgKey] ? `${base}garments/${FILES[imgKey]}` : null;

  return (
    <section className="section section-alt" id="garments">
      <div className="section-inner">
        <h2 className="section-title">Garments as Evidence</h2>
        <div className="section-divider" />
        <p className="section-text">
          Each object here is treated as evidence. Together, these garments show how
          New York&apos;s streets turned sportswear, luxury symbols, and skate gear into a
          global language of style.
        </p>

        <div className="garments-grid">
          {garments.map((g) => {
            const imgSrc = getImg(g.imgKey);

            return (
              <article key={g.name} className="garment-card">
                <div className="garment-image-placeholder">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={g.name}
                      className="garment-image"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <>
                      <div className="garment-silhouette" />
                      <span className="garment-label">{g.name}</span>
                    </>
                  )}
                </div>

                <div className="garment-body">
                  <p className="garment-place">{g.placeEra}</p>
                  <h3 className="exhibit-title" style={{ marginTop: 0 }}>
                    {g.name}
                  </h3>
                  <p className="garment-description">
                    {g.description}{" "}
                    {Array.isArray(g.cites) && g.cites.length > 0 && (
                      <>
                        {g.cites.map((c, i) => (
                          <Citation
                            key={`${g.name}-${c}-${i}`}
                            to={c}
                            label={`[${i + 1}]`}
                          />
                        ))}
                      </>
                    )}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
