export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#top" className="navbar-title">
          Streetwear New York
        </a>
        <nav className="navbar-nav">
          <a href="#overview" className="navbar-link">Overview</a>
          <a href="#map" className="navbar-link">Map</a>
          <a href="#bronx" className="navbar-link">Sites</a>
          <a href="#timeline" className="navbar-link">Timeline</a>
          <a href="#garments" className="navbar-link">Garments</a>
          <a href="#power" className="navbar-link">Power</a>
          <a href="#sources" className="navbar-link">Sources</a>
        </nav>
      </div>
    </header>
  );
}
