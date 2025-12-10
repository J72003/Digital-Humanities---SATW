// src/App.jsx
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import OverviewSection from "./components/OverviewSection.jsx";
import MapOverviewSection from "./components/MapOverviewSection.jsx";
import SiteSection from "./components/SiteSection.jsx";
import TimelineSection from "./components/TimelineSection.jsx";
import GarmentsSection from "./components/GarmentsSection.jsx";
import PowerSection from "./components/PowerSection.jsx";
import GlobalTeaserSection from "./components/GlobalTeaserSection.jsx";
import SourcesSection from "./components/SourcesSection.jsx";
import Citation from "./components/Citation.jsx";

/**
 * IMPORTANT:
 * 1) File name should be App.jsx (not .jsk).
 * 2) MapOverviewSection should receive `sites`
 *    so the schematic map + right-side cards can link to the correct sections.
 * 3) Site narrative now uses JSX fragments with <Citation />.
 */

function App() {
  const sites = [
    {
      id: "bronx",
      title: "South Bronx – Block Parties & the Birth of Hip-Hop Style",
      question:
        "How did local kids turn cheap sportswear into the first hip-hop uniforms?",
      neighborhoodLabel: "South Bronx",
      era: "1970s–1980s",
      narrative: [
        <>
          In the 1970s, the South Bronx faced arson, disinvestment, and aggressive
          policing. Out of that landscape, DJs like Kool Herc threw block parties
          that turned courtyards and community rooms into improvised clubs{" "}
          <Citation to="src-block-party" label="[1]" />.
        </>,
        <>
          Kids wore what they had: nylon and velour tracksuits, bomber and sheepskin
          jackets, Puma and Adidas sneakers with fat laces, Kangol caps, gold chains,
          and name belts. As hip-hop grew into MCing, graffiti, and breakdance crews,
          clothing became a way to signal crew identity and personal style{" "}
          <Citation to="src-rajendran" label="[2]" />.
        </>,
        <>
          In this context, streetwear was not a trend but a survival strategy—public
          proof that you were still here, visible, and in control of your image{" "}
          <Citation to="src-stephens" label="[3]" />.
        </>,
      ],
      keywords: ["Tracksuits", "Sneakers", "Fat laces", "Crew identity", "Survival"],
      garmentLabel: "Bronx tracksuit + sneakers, late 1970s–80s",
      garmentCaption:
        "This outfit shows how affordable sportswear became armor and identity in a borough the city tried to forget.",
      // Optional map hinting (if your MapOverviewSection uses these)
      mapTag: "bronx",
    },
    {
      id: "harlem",
      title: "Harlem – Dapper Dan’s Bootleg Luxury, 1982–1992",
      question:
        "What happens when a Black Harlem tailor hacks European luxury—and gets punished for it?",
      neighborhoodLabel: "Harlem (125th Street)",
      era: "1980s–early 1990s",
      narrative: [
        <>
          In 1982, Daniel Day opened Dapper Dan’s Boutique on 125th Street in Harlem.
          He screen-printed Gucci, Louis Vuitton, and Fendi monograms onto leather
          and fabric, cutting them into jackets, tracksuits, and even car interiors
          for Harlem hustlers, boxers, and rappers{" "}
          <Citation to="src-abc-dapper-dan" label="[4]" />.
        </>,
        <>
          These pieces didn’t imitate Paris runways; they re-centered luxury around
          Black bodies and Harlem streets. Wearing a Dapper Dan design meant flipping
          symbols of white elite wealth into local badges of status and risk{" "}
          <Citation to="src-vice-dapper-dan" label="[8]" />.
        </>,
        <>
          By the early 1990s, trademark lawsuits and raids forced the boutique to close{" "}
          <Citation to="src-debeer-ip" label="[7]" />. Decades later, after Gucci echoed
          one of his 1980s looks on the runway, the brand invited him into official
          collaboration{" "}
          <Citation to="src-guardian-gucci" label="[5]" />{" "}
          <Citation to="src-gucci-collection" label="[6]" />. The same innovation that was
          once criminalized became a selling point.
        </>,
      ],
      keywords: ["Bootleg", "Logos", "Black dandyism", "Lawsuits", "Collaboration"],
      garmentLabel: "Dapper Dan monogram jacket, Harlem, mid-1980s",
      garmentCaption:
        "This jacket shows how Harlem reprogrammed luxury logos—long before fashion houses decided that hip-hop was good business.",
      mapTag: "harlem",
    },
    {
      id: "soho",
      title: "SoHo – Supreme and Downtown Skate Culture, 1994–Present",
      question:
        "How did a local skate shop turn scarcity and attitude into a global brand formula?",
      neighborhoodLabel: "SoHo / Lafayette Street",
      era: "1990s–2020s",
      narrative: [
        <>
          Supreme opened in 1994 on Lafayette Street as a skate shop designed for downtown
          kids: clothing on the walls, space to push boards down the middle, staff pulled
          from the same scene that appeared in the film ‘Kids’{" "}
          <Citation to="src-supreme-history" label="[9]" />.
        </>,
        <>
          The brand’s visual language mixed skate graphics with a minimal red box logo,
          but its real innovation was distribution: small runs, unannounced drops, and
          an insider community that treated each piece as a badge of belonging{" "}
          <Citation to="src-stephens" label="[3]" />.
        </>,
        <>
          Over time, Supreme evolved from neighborhood hangout to global streetwear
          template, collaborating with Nike and Louis Vuitton and eventually being sold
          in multi-billion-dollar deals{" "}
          <Citation to="src-time-supreme" label="[10]" />. The SoHo shop became a model for how
          subcultural credibility can be turned into a corporate asset.
        </>,
      ],
      keywords: ["Skate", "Downtown", "Scarcity", "Collabs", "Hype"],
      garmentLabel: "Supreme box logo hoodie, SoHo, late 1990s–2000s",
      garmentCaption:
        "This hoodie shows how a small graphic plus strict scarcity can turn a basic garment into a high-value symbol of community and status.",
      mapTag: "soho",
    },
    {
      id: "brooklyn-museum",
      title: "Brooklyn Museum – The Rise of Sneaker Culture, 2015",
      question:
        "What changes when sneakers move from the sidewalk into the gallery?",
      neighborhoodLabel: "Brooklyn Museum",
      era: "2015",
      narrative: [
        <>
          In 2015, the Brooklyn Museum hosted ‘The Rise of Sneaker Culture’, one of the
          first major museum exhibitions to foreground sneakers as objects of design,
          technology, and social meaning{" "}
          <Citation to="src-brooklyn-sneaker-culture" label="[12]" />.
        </>,
        <>
          The show included around 150 pairs of shoes—from early athletic prototypes to
          Air Jordans and artist collaborations—presented alongside photographs, ads,
          and commentary on race, class, and youth culture{" "}
          <Citation to="src-afa-sneaker-culture" label="[13]" />.
        </>,
        <>
          Sneakers that once marked Black and brown kids as suspicious on city sidewalks
          appeared behind glass, framed as art and history. The exhibition signaled that
          streetwear was now too culturally valuable for institutions and brands to ignore.
        </>,
      ],
      keywords: ["Exhibition", "Sneakers", "Design history", "Museumification"],
      garmentLabel: "Air Jordans on display, Brooklyn, 2015",
      garmentCaption:
        "This pair shows how a mass-produced consumer object can travel from playgrounds and parking lots into museum vitrines and scholarly catalogs.",
      mapTag: "brooklyn",
    },
  ];

  const timelineEvents = [
    {
      year: "1973",
      label: "South Bronx block parties",
      site: "South Bronx",
      description:
        "DJs in the South Bronx begin throwing block parties that will be remembered as hip-hop’s early blueprint, with fashion emerging from sportswear and neighborhood style.",
      cites: ["src-block-party"],
      target: "bronx",
    },
    {
      year: "1982",
      label: "Dapper Dan opens in Harlem",
      site: "Harlem",
      description:
        "Dapper Dan’s Boutique on 125th Street begins producing custom logo-heavy garments for local clients, fusing Harlem tailoring with European luxury symbols.",
      cites: ["src-abc-dapper-dan"],
      target: "harlem",
    },
    {
      year: "Late 1980s",
      label: "Air Force 1s become ‘Uptowns’",
      site: "Harlem & Bronx",
      description:
        "Nike Air Force 1s become a Harlem and Bronx uniform, earning the nickname ‘Uptowns’ and turning sneakers into a key marker of local status.",
      cites: ["src-gq-air-force-1"],
    },
    {
      year: "1994",
      label: "Supreme opens in SoHo",
      site: "SoHo",
      description:
        "Supreme opens its first shop on Lafayette Street, anchoring a downtown skate and streetwear scene built on scarcity, collaboration, and attitude.",
      cites: ["src-supreme-history", "src-time-supreme"],
      target: "soho",
    },
    {
      year: "2015",
      label: "Rise of Sneaker Culture at Brooklyn Museum",
      site: "Brooklyn Museum",
      description:
        "The Brooklyn Museum exhibition treats sneakers as design and cultural artifacts, marking institutional recognition of streetwear’s historical importance.",
      cites: ["src-brooklyn-sneaker-culture", "src-afa-sneaker-culture"],
      target: "brooklyn-museum",
    },
    {
      year: "2017",
      label: "Gucci x Dapper Dan collaboration",
      site: "Harlem / Luxury",
      description:
        "After years of legal battles in the past, Dapper Dan returns with an official Gucci collaboration, illustrating how Black street innovation can be recast as luxury heritage.",
      cites: ["src-guardian-gucci", "src-gucci-collection", "src-debeer-ip"],
    },
    {
      year: "2020s",
      label: "Streetwear as big business",
      site: "Global",
      description:
        "Supreme and similar brands are traded in billion-dollar deals, while sneakers and streetwear anchor global marketing campaigns and museum programs.",
      cites: ["src-time-supreme", "src-stephens"],
    },
  ];

  const garments = [
    {
      name: "Bronx tracksuit + sneakers",
      placeEra: "South Bronx, late 1970s–80s",
      description:
        "Tracksuits and clean sneakers show how affordable sportswear became a uniform for hip-hop crews and a way to look sharp in a city that offered few resources.",
      cites: ["src-block-party", "src-rajendran"],
      imgKey: "bronx-tracksuit",
    },
    {
      name: "Gold rope chain",
      placeEra: "Bronx & Harlem, 1980s",
      description:
        "Heavy chains signaled success and visibility, turning jewelry into a way to claim status in communities excluded from traditional forms of wealth.",
      cites: ["src-stephens"],
      imgKey: "gold-rope-chain",
    },
    {
      name: "Dapper Dan monogram jacket",
      placeEra: "Harlem, mid-1980s",
      description:
        "This jacket uses unauthorized luxury logos to center Harlem bodies and stories, raising questions about who controls symbols of ‘high’ fashion.",
      cites: ["src-abc-dapper-dan", "src-debeer-ip", "src-vice-dapper-dan"],
      imgKey: "dapper-dan-jacket",
    },
    {
      name: "Air Force 1 ‘Uptown’",
      placeEra: "Harlem & Bronx, 1980s–90s",
      description:
        "Nicknamed ‘Uptowns’ because of their association with uptown Manhattan, these sneakers show how global products gain hyper-local meaning.",
      cites: ["src-gq-air-force-1"],
      imgKey: "air-force-1",
    },
    {
      name: "Supreme box logo hoodie",
      placeEra: "SoHo, late 1990s–2000s",
      description:
        "A simple logo on a basic hoodie becomes valuable through limited drops and community hype, modeling the modern streetwear business.",
      cites: ["src-supreme-history", "src-time-supreme"],
      imgKey: "supreme-box-logo",
    },
    {
      name: "Air Jordans in Brooklyn Museum",
      placeEra: "Brooklyn, 2015",
      description:
        "On display in a major museum, Jordans reveal how items once tied to youth and street culture are reclassified as design icons.",
      cites: ["src-brooklyn-sneaker-culture", "src-afa-sneaker-culture"],
      imgKey: "air-jordans-museum",
    },
  ];

  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <OverviewSection />

      {/* This is the map you showed in the screenshot.
          Passing `sites` is what usually makes the markers + right-side cards actually link correctly. */}
      <MapOverviewSection sites={sites} />

      {sites.map((site) => (
        <SiteSection key={site.id} site={site} />
      ))}

      <TimelineSection events={timelineEvents} />
      <GarmentsSection garments={garments} />
      <PowerSection />
      <GlobalTeaserSection />
      <SourcesSection />
    </div>
  );
}

export default App;
