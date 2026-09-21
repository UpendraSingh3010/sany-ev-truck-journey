import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Cable,
  Check,
  ChevronDown,
  Cpu,
  Eye,
  Gauge,
  Menu,
  Network,
  Phone,
  Route as RouteIcon,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import cargoTruck from "@/assets/sany-cargo-truck.jpeg.asset.json";
import flatbedTruck from "@/assets/sany-flatbed-truck.png.asset.json";
import highwayHero from "@/assets/sany-highway-hero.png.asset.json";
import cockpit from "@/assets/sany-cockpit.webp.asset.json";
import loadedTruck from "@/assets/sany-loaded-truck.webp.asset.json";
import tipperTruck from "@/assets/sany-tipper-truck.jpeg.asset.json";
import truckLineup from "@/assets/sany-truck-lineup.png.asset.json";
import containerMountain from "@/assets/sany-container-mountain.png.asset.json";
import dcCharging from "@/assets/sany-dc-charging.png.asset.json";
import regenerativeBraking from "@/assets/sany-regenerative-braking.png.asset.json";
import sanyLogo from "@/assets/sany-official-logo.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SANY Electric Trucks India | Heavy-Duty EV Solutions" },
      { name: "description", content: "Explore SANY heavy-duty electric trucks, integrated EV technology, range, charging and fleet capability." },
      { property: "og:title", content: "SANY Electric Trucks India" },
      { property: "og:description", content: "Integrated heavy-duty electric truck technology for demanding fleet operations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = {
  kicker: string;
  title: string;
  without: string;
  withSany: string;
  image: string;
  imageAlt: string;
  imageFit: "cover" | "contain";
  imagePosition?: string;
  stat?: string;
  statLabel?: string;
  features: string[];
  icon: typeof BatteryCharging;
};

const stages: Stage[] = [
  { kicker: "Integrated platform", title: "Choosing the truck", without: "Comparing battery size, motor output and basic specifications individually.", withSany: "Choosing an integrated heavy-duty EV platform where key systems are designed to work together.", image: truckLineup.url, imageAlt: "Three SANY electric truck configurations on a mountain road", imageFit: "cover", imagePosition: "center center", features: ["Battery", "Motor", "Software", "Axle"], icon: RouteIcon },
  { kicker: "Operating capability", title: "Energy & range", without: "Range anxiety and limited operating flexibility.", withSany: "Battery options up to 462 kWh with certified range up to 315 km.", image: containerMountain.url, imageAlt: "SANY electric container truck in a mountain landscape", imageFit: "cover", imagePosition: "center center", stat: "315 km", statLabel: "Certified range up to", features: ["Up to 462 kWh", "Route ready"], icon: BatteryCharging },
  { kicker: "Electric architecture", title: "Power delivery", without: "Powertrain components operating as separate systems.", withSany: "SANY motor and electric control working together within the vehicle architecture.", image: cargoTruck.url, imageAlt: "Side profile of SANY electric cargo truck", imageFit: "contain", features: ["Motor", "E-control", "Power path"], icon: Zap },
  { kicker: "Connected intelligence", title: "Vehicle intelligence", without: "Hardware-led vehicle with limited system integration.", withSany: "Patented in-house software coordinating 20+ controller groups.", image: flatbedTruck.url, imageAlt: "SANY electric truck platform", imageFit: "contain", stat: "20+", statLabel: "Controller groups", features: ["VCU", "BMS", "ADAS", "Thermal"], icon: Network },
  { kicker: "Energy efficiency", title: "Energy recovery", without: "Energy generated during deceleration is not part of a coordinated recovery strategy.", withSany: "5-level braking energy regeneration helps recover energy during deceleration.", image: regenerativeBraking.url, imageAlt: "SANY electric tractor demonstrating controlled braking", imageFit: "cover", imagePosition: "center center", stat: "5 levels", statLabel: "Braking regeneration", features: ["Wheels", "Motor", "Battery"], icon: Gauge },
  { kicker: "Driver awareness", title: "Driver visibility", without: "Greater dependence on mirrors and direct driver judgement.", withSany: "360° Surround View Camera and ADAS support driver awareness.", image: tipperTruck.url, imageAlt: "Three-quarter view of SANY electric tipper truck", imageFit: "contain", stat: "360°", statLabel: "Surround view", features: ["FCW", "LDW", "Camera"], icon: Eye },
  { kicker: "Cabin & control", title: "Driver environment", without: "A functional cabin focused primarily on basic vehicle operation.", withSany: "Digital cluster, infotainment, driver-centric controls and adjustable driver seating.", image: cockpit.url, imageAlt: "SANY electric truck digital cockpit", imageFit: "contain", imagePosition: "center center", features: ["Digital cluster", "Infotainment", "Driver controls", "Adjustable seat"], icon: ShieldCheck },
  { kicker: "Built for duty", title: "Heavy-duty driveline", without: "Standard driveline architecture.", withSany: "Heavy-duty rear axle featuring hub-reduction technology.", image: loadedTruck.url, imageAlt: "Loaded SANY electric heavy-duty truck", imageFit: "contain", features: ["Rear axle", "Hub reduction", "Heavy duty"], icon: Cpu },
  { kicker: "Charging standard", title: "Charging", without: "Different charging approaches across vehicles and systems.", withSany: "CCS2 charging interface across the SANY HDT range.", image: dcCharging.url, imageAlt: "SANY electric container truck connected to a DC charger", imageFit: "cover", imagePosition: "center center", stat: "CCS2", statLabel: "Charging interface", features: ["5538E", "5550E", "5565E"], icon: Cable },
  { kicker: "One ecosystem", title: "Fleet confidence", without: "Multiple technologies from disconnected sources, managed as individual systems.", withSany: "Software, battery, motor, control and axle engineered within the SANY ecosystem.", image: flatbedTruck.url, imageAlt: "Complete SANY heavy-duty electric truck", imageFit: "contain", features: ["Battery", "Motor", "Software", "Control", "Axle"], icon: Check },
];

function scrollToQuote() {
  document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" });
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="utility-bar">
        <a href="#top" className="sany-logo" aria-label="SANY electric trucks home"><img src={sanyLogo.url} alt="SANY" /></a>
        <div className="utility-actions">
          <span><Phone size={16} /> Electric trucks for India</span>
          <Button onClick={scrollToQuote}>Get a Quote</Button>
        </div>
      </div>
      <div className="nav-bar">
        <p>Heavy-Duty Electric Trucks</p>
        <nav className={open ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#top" onClick={() => setOpen(false)}>Overview</a>
          <a href="#system" onClick={() => setOpen(false)}>Technology <ChevronDown size={14} /></a>
          <a href="#range" onClick={() => setOpen(false)}>Capability</a>
          <a href="#models" onClick={() => setOpen(false)}>Models</a>
          <a href="#quote" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <Button variant="ghost" size="icon" className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
    </header>
  );
}

function ComparisonStage({ stage, index }: { stage: Stage; index: number }) {
  const Icon = stage.icon;
  return (
    <section className="stage-section reveal" id={index === 0 ? "system" : index === 1 ? "range" : undefined}>
      <div className="stage-media">
        <img className={`stage-image stage-image-${stage.imageFit}`} src={stage.image} alt={stage.imageAlt} style={{ objectPosition: stage.imagePosition }} />
        <div className="image-caption"><span>{String(index + 1).padStart(2, "0")}</span><p>{stage.kicker}</p></div>
        {stage.stat && <div className="stage-stat"><strong>{stage.stat}</strong><span>{stage.statLabel}</span></div>}
      </div>
      <div className="stage-copy">
        <div className="stage-heading"><span><Icon /></span><div><p className="eyebrow">{stage.kicker}</p><h2>{stage.title}</h2></div></div>
        <div className="comparison-row without-block"><span>Without SANY</span><p>{stage.without}</p></div>
        <div className="comparison-row with-block"><span>With SANY</span><p>{stage.withSany}</p></div>
        <div className="feature-list">{stage.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  if (sent) return <div className="success-panel" role="status"><span><Check /></span><p>Request prepared</p><h3>Thank you for your interest in SANY electric trucks.</h3><small>This visual demo does not send or store your information.</small><Button variant="outline" onClick={() => setSent(false)}>Submit another request</Button></div>;
  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <label><span>Full name *</span><input name="name" required autoComplete="name" placeholder="Your name" /></label>
      <label><span>Company *</span><input name="company" required autoComplete="organization" placeholder="Company name" /></label>
      <label><span>Phone *</span><input name="phone" required type="tel" autoComplete="tel" placeholder="Contact number" /></label>
      <label><span>Work email *</span><input name="email" required type="email" autoComplete="email" placeholder="name@company.com" /></label>
      <label><span>Fleet size</span><select name="fleet"><option value="">Select fleet size</option><option>1–5 vehicles</option><option>6–20 vehicles</option><option>21–50 vehicles</option><option>50+ vehicles</option></select></label>
      <label><span>Model interest</span><select name="model"><option value="">Select a model</option><option>5538E</option><option>5550E</option><option>5565E</option><option>Not sure yet</option></select></label>
      <label className="form-wide"><span>Route or application</span><textarea name="application" rows={3} placeholder="Tell us about the load, route and daily distance" /></label>
      <div className="form-wide form-submit"><p>Demo only — details are not sent or stored.</p><Button type="submit">Request a Quote <ArrowRight size={17} /></Button></div>
    </form>
  );
}

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <Header />
      <section className="hero">
        <img className="hero-image" src={highwayHero.url} alt="SANY electric heavy-duty truck on the open road" />
        <div className="hero-content">
          <p className="eyebrow">SANY Heavy-Duty Electric Trucks</p>
          <h1>Powering a new era<br />of heavy transport.</h1>
          <p className="hero-lede">An integrated electric platform engineered for demanding routes, heavy loads and confident fleet operations.</p>
          <Button onClick={scrollToQuote}>Request a Quote <ArrowRight size={18} /></Button>
        </div>
        <a className="scroll-cue" href="#system">Explore the technology <ArrowDown size={18} /></a>
      </section>

      <section className="spec-strip" aria-label="Key specifications">
        <div><strong>462</strong><span>kWh battery options<br />up to</span></div>
        <div><strong>315</strong><span>km certified range<br />up to</span></div>
        <div><strong>CCS2</strong><span>charging across<br />the HDT range</span></div>
        <div><strong>20+</strong><span>controller groups<br />coordinated</span></div>
      </section>

      <section className="intro-band reveal">
        <div><p className="eyebrow">The SANY advantage</p><h2>Engineered as one complete system.</h2></div>
        <div><p>Heavy-duty electric performance is not one component. SANY brings battery, motor, software, control and axle technology together within one vehicle architecture.</p><div className="comparison-key"><span><i />Without SANY</span><span><i />With SANY</span></div></div>
      </section>

      <div className="stages">{stages.map((stage, index) => <ComparisonStage key={stage.title} stage={stage} index={index} />)}</div>

      <section className="system-band reveal" id="models">
        <div className="system-copy"><p className="eyebrow light">SANY engineering ecosystem</p><h2>One truck.<br />Five connected systems.</h2><p>The confidence to move heavy-duty operations forward comes from every major system working together.</p><div className="system-parts">{["Battery", "Motor", "Software", "Control", "Axle"].map((part, index) => <span key={part}><b>{String(index + 1).padStart(2, "0")}</b>{part}</span>)}</div></div>
        <div className="system-truck"><img src={flatbedTruck.url} alt="SANY heavy-duty electric truck platform" /></div>
      </section>

      <section className="quote-section" id="quote">
        <div className="quote-intro"><p className="eyebrow">Get a quote</p><h2>Build the right electric fleet.</h2><p>Share your operating requirements and prepare a quote request for the SANY heavy-duty electric truck range.</p><div className="quote-models"><span>5538E</span><span>5550E</span><span>5565E</span></div></div>
        <QuoteForm />
      </section>

      <footer><a href="#top" className="sany-logo" aria-label="Back to top"><img src={sanyLogo.url} alt="SANY" /></a><p>Product information shown is based on the supplied campaign brief. Specifications may vary by model and configuration.</p><a href="https://www.sany.in/" target="_blank" rel="noreferrer">Visit SANY India <ArrowRight size={14} /></a></footer>
    </main>
  );
}