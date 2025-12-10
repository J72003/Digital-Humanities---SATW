import Citation from "./Citation.jsx";

export default function PowerSection() {
  return (
    <section className="section section-alt" id="power">
      <div className="section-inner">
        <h2 className="section-title">Power, Profit, and the Price of Style</h2>
        <div className="section-divider" />
        <p className="section-text">
          This project treats streetwear as a system, not just a trend. New
          York&apos;s story moves from rebellion to marketing template, from
          criminalized creativity to corporate collaboration
          <Citation to="src-stephens" label="[1]" />.
        </p>

        <div className="power-grid">
          <div className="power-block">
            <h3>From Rebellion to Marketing Template</h3>
            <p>
              In the South Bronx and Harlem, hip-hop fashion began as a way for
              Black and Latinx youth to claim visibility and status in a city
              shaped by neglect and policing
              <Citation to="src-block-party" label="[1]" />. Over time, those looks became a
              global marketing language for &quot;urban&quot; cool
              <Citation to="src-stephens" label="[2]" />.
            </p>
          </div>

          <div className="power-block">
            <h3>Criminalized Creativity vs. Corporate Collabs</h3>
            <p>
              The same Dapper Dan designs that drew lawsuits and raids in the
              1980s later returned as official Gucci collaborations
              <Citation to="src-debeer-ip" label="[1]" />
              <Citation to="src-guardian-gucci" label="[2]" />. Black
              innovation that once attracted punishment became a selling point
              when brands could control the terms
              <Citation to="src-gucci-collection" label="[3]" />.
            </p>
          </div>

          <div className="power-block">
            <h3>Supreme as Asset</h3>
            <p>
              Supreme started as a downtown skate shop but was eventually sold
              in billion-dollar deals
              <Citation to="src-time-supreme" label="[1]" />. Its
              credibility and subcultural history were turned into a tradable
              financial asset, showing how streetwear can move from scene to
              stockpile.
            </p>
          </div>

          <div className="power-block">
            <h3>From Street to Gallery</h3>
            <p>
              Exhibitions like the Brooklyn Museum&apos;s sneaker show
              legitimize streetwear as design and history
              <Citation to="src-brooklyn-sneaker-culture" label="[1]" />
              <Citation to="src-afa-sneaker-culture" label="[2]" />, even as the people
              who first invested meaning in these styles often see little of the
              resulting institutional prestige or profit.
            </p>
          </div>
        </div>

        <p className="section-text section-text--emphasis">
          New York’s streetwear began as a way for marginalized communities to
          write themselves into the cityscape. Today, that same visual language
          drives museum shows and billion-dollar deals. This project asks who
          gets remembered, who gets paid, and whose bodies still carry the risk.
        </p>
      </div>
    </section>
  );
}
