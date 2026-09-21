import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Cable,
  Check,
  Cpu,
  Eye,
  Gauge,
  Menu,
  Network,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import cargoTruck from "@/assets/sany-cargo-truck.jpeg.asset.json";
import flatbedTruck from "@/assets/sany-flatbed-truck.png.asset.json";
import highwayDistant from "@/assets/sany-highway-distant.png.asset.json";
import highwayHero from "@/assets/sany-highway-hero.png.asset.json";
import cockpit from "@/assets/sany-cockpit.webp.asset.json";
import driverSeat from "@/assets/sany-driver-seat.webp.asset.json";
import loadedTruck from "@/assets/sany-loaded-truck.webp.asset.json";
import tipperTruck from "@/assets/sany-tipper-truck.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SANY Electric Trucks | Engineered as One" },
      { name: "description", content: "Discover how SANY integrates battery, motor, software, control and axle technology for heavy-duty electric transport." },
      { property: "og:title", content: "SANY Electric Trucks | Engineered as One" },
      { property: "og:description", content: "A complete heavy-duty EV ecosystem engineered for range, control and fleet confidence." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = {
  eyebrow: string;
  title: string;
  without: string;
  withSany: string;
  image: string;
  imageAlt: string;
  stat?: string;
  statLabel?: string;
  tags: string[];
  icon: ReactNode;
  mode?: "photo" | "cockpit" | "network";
};

const stages: Stage[] = [
  { eyebrow: "01 / Platform", title: "Choosing the truck", without: "Comparing battery size, motor output and basic specifications individually.", withSany: "Choosing an integrated heavy-duty EV platform where key systems are designed to work together.", image: flatbedTruck.url, imageAlt: "SANY electric heavy-duty flatbed truck", tags: ["Battery", "Motor", "Software", "Axle"], icon: <Sparkles /> },
  { eyebrow: "02 / Capability", title: "Energy & range", without: "Range anxiety and limited operating flexibility.", withSany: "Battery options up to 462 kWh with certified range up to 315 km.", image: highwayHero.url, imageAlt: "SANY electric truck travelling on a highway", stat: "315", statLabel: "km certified range", tags: ["Up to 462 kWh", "Route ready"], icon: <BatteryCharging /> },
  { eyebrow: "03 / Architecture", title: "Power delivery", without: "Powertrain components operating as separate systems.", withSany: "SANY motor and electric control working together within the vehicle architecture.", image: cargoTruck.url, imageAlt: "Side profile of SANY electric cargo truck", tags: ["Motor", "E-control", "Power path"], icon: <Zap /> },
  { eyebrow: "04 / Intelligence", title: "Vehicle intelligence", without: "Hardware-led vehicle with limited system integration.", withSany: "Patented in-house software coordinating 20+ controller groups.", image: flatbedTruck.url, imageAlt: "SANY electric truck platform", stat: "20+", statLabel: "controller groups", tags: ["VCU", "BMS", "ADAS", "Thermal"], icon: <Network />, mode: "network" },
  { eyebrow: "05 / Efficiency", title: "Energy recovery", without: "Energy generated during deceleration is not part of a coordinated recovery strategy.", withSany: "5-level braking energy regeneration helps recover energy during deceleration.", image: highwayDistant.url, imageAlt: "SANY electric truck driving through mountain landscape", stat: "5", statLabel: "regeneration levels", tags: ["Wheels", "Motor", "Battery"], icon: <Gauge /> },
  { eyebrow: "06 / Awareness", title: "Driver visibility", without: "Greater dependence on mirrors and direct driver judgement.", withSany: "360° Surround View Camera and ADAS support driver awareness.", image: tipperTruck.url, imageAlt: "Three-quarter view of SANY electric tipper truck", stat: "360°", statLabel: "surround view", tags: ["FCW", "LDW", "Camera"], icon: <Eye /> },
  { eyebrow: "07 / Cockpit", title: "Driver environment", without: "A functional cabin focused primarily on basic vehicle operation.", withSany: "Digital cluster, infotainment, driver-centric controls and adjustable driver seating.", image: cockpit.url, imageAlt: "SANY electric truck digital cockpit", tags: ["Digital cluster", "Infotainment", "Driver controls", "Adjustable seat"], icon: <ShieldCheck />, mode: "cockpit" },
  { eyebrow: "08 / Strength", title: "Heavy-duty driveline", without: "Standard driveline architecture.", withSany: "Heavy-duty rear axle featuring hub-reduction technology.", image: loadedTruck.url, imageAlt: "Loaded SANY electric heavy-duty truck", tags: ["Rear axle", "Hub reduction", "Heavy duty"], icon: <Cpu /> },
  { eyebrow: "09 / Standard", title: "Charging", without: "Different charging approaches across vehicles and systems.", withSany: "CCS2 charging interface across the SANY HDT range.", image: tipperTruck.url, imageAlt: "SANY heavy-duty electric truck", stat: "CCS2", statLabel: "one charging interface", tags: ["5538E", "5550E", "5565E"], icon: <Cable /> },
  { eyebrow: "10 / Ecosystem", title: "Fleet confidence", without: "Multiple technologies from disconnected sources, managed as individual systems.", withSany: "Software, battery, motor, control and axle engineered within the SANY ecosystem.", image: flatbedTruck.url, imageAlt: "Complete SANY heavy-duty electric truck", tags: ["Battery", "Motor", "Software", "Control", "Axle"], icon: <Check />, mode: "network" },
];

function scrollToQuote() {
  document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="SANY electric trucks home">SANY<span>EV</span></a>
      <div className="header-rule" />
      <p>Heavy-duty electric trucks</p>
      <nav className={open ? "nav-open" : ""} aria-label="Primary navigation">
        <a href="#system" onClick={() => setOpen(false)}>The system</a>
        <a href="#range" onClick={() => setOpen(false)}>Capability</a>
        <Button onClick={() => { setOpen(false); scrollToQuote(); }}>Request a quote <ArrowRight size={16} /></Button>
      </nav>
      <Button variant="ghost" className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
    </header>
  );
}

function TechnicalVisual({ stage, index }: { stage: Stage; index: number }) {
  return (
    <div className={`technical-visual visual-${stage.mode ?? "photo"}`}>
      <div className="visual-grid" />
      <img src={stage.image} alt={stage.imageAlt} />
      <div className="scan-line" />
      {stage.mode === "network" && <div className="network-ring"><span /><span /><span /><span /></div>}
      {index === 4 && <div className="energy-arrows"><ArrowRight /><ArrowRight /><ArrowRight /></div>}
      {index === 5 && <div className="coverage-ring"><i /><i /><i /></div>}
      <div className="visual-code">SYS.{String(index + 1).padStart(2, "0")} / ACTIVE</div>
      <div className="visual-tags">
        {stage.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {stage.stat && <div className="stat-block"><strong>{stage.stat}</strong><span>{stage.statLabel}</span></div>}
    </div>
  );
}

function ComparisonStage({ stage, index }: { stage: Stage; index: number }) {
  return (
    <section className="stage-section reveal" id={index === 0 ? "system" : index === 1 ? "range" : undefined}>
      <div className="stage-index">{String(index + 1).padStart(2, "0")}</div>
      <div className="stage-copy">
        <div className="stage-icon">{stage.icon}</div>
        <p className="eyebrow">{stage.eyebrow}</p>
        <h2>{stage.title}</h2>
        <div className="comparison-copy">
          <div className="without-block">
            <span>Without SANY</span>
            <p>{stage.without}</p>
          </div>
          <div className="with-block">
            <span>With SANY</span>
            <p>{stage.withSany}</p>
          </div>
        </div>
      </div>
      <TechnicalVisual stage={stage} index={index} />
    </section>
  );
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  if (sent) {
    return <div className="success-panel" role="status"><span><Check /></span><p>Request prepared</p><h3>Your fleet brief is ready for the SANY team.</h3><small>This visual demo does not send or store your information.</small><Button variant="outline" onClick={() => setSent(false)}>Submit another request</Button></div>;
  }
  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label><span>Full name *</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label><span>Company *</span><input name="company" required autoComplete="organization" placeholder="Company name" /></label>
      <label><span>Phone *</span><input name="phone" required type="tel" autoComplete="tel" placeholder="Contact number" /></label>
      <label><span>Work email *</span><input name="email" required type="email" autoComplete="email" placeholder="name@company.com" /></label>
      <label><span>Fleet size</span><select name="fleet"><option value="">Select fleet size</option><option>1–5 vehicles</option><option>6–20 vehicles</option><option>21–50 vehicles</option><option>50+ vehicles</option></select></label>
      <label><span>Model interest</span><select name="model"><option value="">Select a model</option><option>5538E</option><option>5550E</option><option>5565E</option><option>Not sure yet</option></select></label>
      <label className="form-wide"><span>Route or application</span><textarea name="application" rows={3} placeholder="Tell us about the load, route and daily distance" /></label>
      <div className="form-wide form-submit"><p>Demo only — details are not sent or stored.</p><Button type="submit">Request a quote <ArrowRight size={17} /></Button></div>
    </form>
  );
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <Header />
      <section className="hero">
        <img className="hero-image" src={highwayHero.url} alt="SANY electric heavy-duty truck on the open road" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">SANY Heavy-Duty Electric Trucks</p>
          <h1>Engineered<br />as <em>one.</em></h1>
          <p className="hero-lede">Battery. Motor. Software. Control. Axle. One integrated ecosystem built for the realities of heavy-duty transport.</p>
          <Button onClick={scrollToQuote}>Request a quote <ArrowRight size={18} /></Button>
        </div>
        <div className="hero-stats">
          <div><strong>462</strong><span>kWh battery options<br />up to</span></div>
          <div><strong>315</strong><span>km certified range<br />up to</span></div>
          <div><strong>CCS2</strong><span>charging across<br />the HDT range</span></div>
        </div>
        <a className="scroll-cue" href="#system">Explore the system <ArrowDown size={18} /></a>
      </section>

      <section className="manifesto reveal">
        <div><p className="eyebrow">The difference is integration</p><h2>Not a collection<br />of components.</h2></div>
        <div className="manifesto-copy"><p>A heavy-duty electric truck must work as a system. Every stage below shows what changes when the platform is engineered together.</p><div className="comparison-key"><span><i />Without SANY</span><span><i />With SANY</span></div></div>
      </section>

      <div className="stages">
        {stages.map((stage, index) => <ComparisonStage key={stage.title} stage={stage} index={index} />)}
      </div>

      <section className="convergence reveal">
        <div className="convergence-copy"><p className="eyebrow light">One engineering ecosystem</p><h2>Five systems.<br /><em>One SANY.</em></h2><p>The confidence to move heavy-duty operations forward comes from everything working together.</p></div>
        <div className="convergence-visual">
          <img src={flatbedTruck.url} alt="SANY heavy-duty electric truck platform" />
          <div className="orbit-label label-1">Battery</div><div className="orbit-label label-2">Motor</div><div className="orbit-label label-3">Software</div><div className="orbit-label label-4">Control</div><div className="orbit-label label-5">Axle</div>
        </div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro"><p className="eyebrow">Start the conversation</p><h2>Build the right<br />electric fleet.</h2><p>Share your operating requirements and prepare a quote request for the SANY heavy-duty electric truck range.</p><div className="quote-models"><span>5538E</span><span>5550E</span><span>5565E</span></div></div>
        <QuoteForm />
      </section>

      <footer><a href="#top" className="brand">SANY<span>EV</span></a><p>Product information shown is based on the supplied campaign brief. Specifications may vary by model and configuration.</p><a href="https://www.sany.in/" target="_blank" rel="noreferrer">Visit SANY India <ArrowRight size={14} /></a></footer>
    </main>
  );
}
