import { useState } from 'react';
import './App.css';

const layers = [
  ['Satellite imagery', 'imagery', true],
  ['Watershed boundary', 'boundary', true],
  ['Drainage network', 'drainage', true],
  ['Geo-coded images', 'photos', true],
  ['Water structures', 'structures', false],
  ['NDVI change', 'ndvi', false],
];

function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [selectedLayer, setSelectedLayer] = useState('Satellite imagery');

  return (
    <main className="workspace">
      <aside className="sidebar">
        <div>
          <div className="brand"><div className="brand-mark">◒</div><span>JalDrishti</span></div>
          <button className="project-switcher">Watershed monitoring <span>⌄</span></button>
          <p className="nav-label">WORKSPACE</p>
          <nav>
            {['Overview', 'Image explorer', 'Analysis', 'Reports'].map((item) => (
              <button key={item} onClick={() => setActiveTab(item)} className={`nav-item ${activeTab === item ? 'active' : ''}`}>
                <span className={`nav-icon ${item.toLowerCase().replace(' ', '-')}`}>{item === 'Overview' ? '▦' : item === 'Image explorer' ? '◉' : item === 'Analysis' ? '⌁' : '▤'}</span>{item}
              </button>
            ))}
          </nav>
          <p className="nav-label layers-label">MAP LAYERS</p>
          <div className="layer-list">
            {layers.map(([name, type, visible]) => (
              <button key={name} onClick={() => setSelectedLayer(name)} className={`layer ${selectedLayer === name ? 'selected' : ''}`}>
                <span className={`layer-dot ${type}`}></span><span>{name}</span>{visible && <b>✓</b>}
              </button>
            ))}
          </div>
        </div>
        <div className="sidebar-footer"><span className="avatar">SK</span><div><strong>State watershed cell</strong><small>Project administrator</small></div><span>•••</span></div>
      </aside>

      <section className="content">
        <header className="topbar">
          <div className="breadcrumbs"><span>Projects</span><b>›</b><strong>Mandakini micro-watershed</strong></div>
          <div className="top-actions"><button className="date-select">01 Apr 2023 — 31 Mar 2024 <span>⌄</span></button><button className="icon-button">⌕</button><button className="icon-button bell">♧<i></i></button></div>
        </header>

        <div className="page-heading">
          <div><p className="eyebrow">WATERSHED DEVELOPMENT • KHANDWA, MADHYA PRADESH</p><h1>Mandakini micro-watershed</h1><p className="subtitle">Integrated geospatial assessment and monitoring overview</p></div>
          <div className="heading-actions"><button className="secondary-button">⇩ &nbsp; Export report</button><button className="primary-button">+ &nbsp; Add field observation</button></div>
        </div>

        <section className="metrics" aria-label="Watershed summary">
          <article><div className="metric-icon water">≋</div><div><p>Watershed area</p><strong>4,280 <small>ha</small></strong><span className="neutral">Surveyed extent</span></div></article>
          <article><div className="metric-icon green">↗</div><div><p>Vegetation health</p><strong>0.64 <small>NDVI</small></strong><span className="up">↑ 12.4% <em>vs. last year</em></span></div></article>
          <article><div className="metric-icon blue">◒</div><div><p>Water bodies</p><strong>18 <small>mapped</small></strong><span className="up">↑ 3 <em>new this season</em></span></div></article>
          <article><div className="metric-icon amber">⌂</div><div><p>Interventions</p><strong>42 <small>completed</small></strong><span className="neutral">of 56 planned</span></div></article>
        </section>

        <section className="dashboard-grid">
          <article className="map-card card">
            <div className="card-header"><div><h2>Watershed spatial view</h2><p>SRISHTI-DRISHTI imagery · 30 m resolution</p></div><button className="more">•••</button></div>
            <div className="map-area">
              <div className="map-texture"></div><div className="boundary-shape"></div><div className="stream stream-a"></div><div className="stream stream-b"></div><div className="stream stream-c"></div>
              {[[36,38],[54,31],[65,53],[47,62],[73,38]].map(([left, top], index) => <button key={index} className="map-pin" style={{ left: `${left}%`, top: `${top}%` }} aria-label="Geo-coded observation">⌾</button>)}
              <div className="map-tools"><button>+</button><button>−</button><button>⌖</button></div>
              <div className="map-legend"><p><i className="legend-boundary"></i>Watershed boundary</p><p><i className="legend-stream"></i>Drainage</p><p><i className="legend-photo"></i>Geo-coded image</p></div>
              <div className="map-date">Last satellite pass&nbsp; · &nbsp;12 Mar 2024</div>
            </div>
            <div className="map-caption"><span><i className="status-dot"></i> 124 geo-coded observations linked</span><button>Open detailed map <b>→</b></button></div>
          </article>

          <article className="insights card"><div className="card-header"><div><h2>Key insights</h2><p>Derived from spatial analysis</p></div><button className="more">•••</button></div>
            <div className="insight-list"><div className="insight"><span className="insight-symbol positive">↗</span><div><h3>Vegetation recovery observed</h3><p>High NDVI increase across 68% of treated land parcels.</p><a>View change analysis →</a></div></div><div className="insight"><span className="insight-symbol info">◈</span><div><h3>3 water structures detected</h3><p>New farm ponds identified in the southern cluster.</p><a>Review structures →</a></div></div><div className="insight"><span className="insight-symbol alert">!</span><div><h3>Attention area identified</h3><p>Low vegetation cover persists near Dhanora village.</p><a>Inspect on map →</a></div></div></div>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="trend-card card"><div className="card-header"><div><h2>Vegetation trend</h2><p>Mean NDVI across watershed</p></div><button className="period">12 months⌄</button></div><div className="chart"><div className="y-axis"><span>0.8</span><span>0.6</span><span>0.4</span><span>0.2</span></div><div className="chart-lines"><i></i><i></i><i></i><i></i><svg viewBox="0 0 520 144" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#2e9b72" stopOpacity=".22"/><stop offset="100%" stopColor="#2e9b72" stopOpacity="0"/></linearGradient></defs><path d="M0,112 L43,103 L87,108 L130,88 L173,91 L217,70 L260,76 L303,54 L347,64 L390,36 L433,42 L476,20 L520,27 L520,144 L0,144 Z" fill="url(#fill)"/><path d="M0,112 L43,103 L87,108 L130,88 L173,91 L217,70 L260,76 L303,54 L347,64 L390,36 L433,42 L476,20 L520,27" fill="none" stroke="#268c68" strokeWidth="3"/></svg><div className="x-axis"><span>Apr</span><span>Jun</span><span>Aug</span><span>Oct</span><span>Dec</span><span>Feb</span></div></div></div></article>
          <article className="activity-card card"><div className="card-header"><div><h2>Recent field activity</h2><p>Latest geo-coded submissions</p></div><button className="more">•••</button></div><div className="activities"><div><span className="activity-dot green-dot"></span><p><b>Check dam inspection</b><small>Khargone cluster · Today, 10:42</small></p><button>View</button></div><div><span className="activity-dot blue-dot"></span><p><b>Farm pond geo-tagged</b><small>Bhagwanpura · Yesterday, 16:18</small></p><button>View</button></div><div><span className="activity-dot orange-dot"></span><p><b>Vegetation survey completed</b><small>Dhanora village · 18 Mar 2024</small></p><button>View</button></div></div></article>
        </section>
      </section>
    </main>
  );
}

export default App;
