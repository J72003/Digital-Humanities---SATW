// src/components/MapOverviewSection.jsx
import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const DEFAULT_SITES = [
  {
    id: "bronx",
    label: "South Bronx",
    blurb: "Block parties, early hip-hop, sportswear as survival.",
    lat: 40.817, lng: -73.918,
  },
  {
    id: "harlem",
    label: "Harlem (125th Street)",
    blurb: "Dapper Dan, bootleg luxury, Black dandyism remixed.",
    lat: 40.8075, lng: -73.945,
  },
  {
    id: "soho",
    label: "SoHo / Lafayette Street",
    blurb: "Supreme, skate culture, scarcity and hype economics.",
    lat: 40.7242, lng: -73.997,
  },
  {
    id: "brooklyn-museum",
    label: "Brooklyn Museum",
    blurb: "Sneakers enter the gallery; streetwear becomes heritage.",
    lat: 40.6712, lng: -73.9636,
  },
];

export default function MapOverviewSection({ sites = DEFAULT_SITES }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Normalize App.jsx data if you pass the richer site objects
  const normalized = useMemo(() => {
    const base = sites?.length ? sites : DEFAULT_SITES;

    return base.map((s) => ({
      id: s.id,
      label: s.neighborhoodLabel || s.label || s.title,
      blurb:
        s.question ||
        s.blurb ||
        "A key node in New York’s streetwear politics and memory.",
      // If App.jsx doesn't provide lat/lng, fall back to defaults by id
      lat:
        s.lat ??
        DEFAULT_SITES.find((d) => d.id === s.id)?.lat ??
        40.75,
      lng:
        s.lng ??
        DEFAULT_SITES.find((d) => d.id === s.id)?.lng ??
        -73.98,
    }));
  }, [sites]);

  useEffect(() => {
    if (!mapRef.current) return;

    // Prevent double-init in React StrictMode
    if (mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: true,
      scrollWheelZoom: false,
      preferCanvas: true,
    }).setView([40.75, -73.97], 11);

    mapInstanceRef.current = map;

    // Real basemap (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
      maxZoom: 19,
    }).addTo(map);

    // Add markers
    normalized.forEach((s) => {
      const marker = L.circleMarker([s.lat, s.lng], {
        radius: 8,
        color: "#f97373",
        weight: 2,
        fillColor: "#f97373",
        fillOpacity: 0.35,
      }).addTo(map);

      marker.bindPopup(
        `<strong>${s.label}</strong><br/>${s.blurb}<br/><em>Click to jump</em>`
      );

      marker.on("click", () => {
        // jump to section
        const target = document.getElementById(s.id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `#${s.id}`);
        }
      });
    });

    // Cleanup on unmount
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [normalized]);

  return (
    <section className="section section-alt" id="map">
      <div className="section-inner">
        <h2 className="section-title">Four Sites, One City</h2>
        <div className="section-divider" />
        <p className="section-text">
          This prototype uses a real city basemap to emphasize the argument:
          New York streetwear is spatial. It emerges from specific neighborhoods
          with distinct histories, economies, and cultural politics.
        </p>

        <div className="map-layout">
          {/* LEFT: real map */}
          <div className="map-visual">
            <div className="nyc-leaflet-shell">
              <div ref={mapRef} className="nyc-leaflet-map" />
            </div>
          </div>

          {/* RIGHT: cards */}
          <div className="map-sites">
            {normalized.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="map-site-card">
                <h3>{s.label}</h3>
                <p>{s.blurb}</p>
              </a>
            ))}
          </div>
        </div>

        <p className="section-text section-text--small">
          This is a lightweight real-map implementation using OpenStreetMap tiles.
          Later you can swap in borough boundaries or a custom NYC style layer.
        </p>
      </div>
    </section>
  );
}
