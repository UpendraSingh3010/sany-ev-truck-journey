# SANY EV Truck Funnel

## Goal
Build a premium, industry-ready single-page funnel that moves fleet buyers through ten “Without SANY / With SANY” comparisons and ends with a request-a-quote form. This first version is a visual demo, so submitting the form will show a polished confirmation state without sending or storing data.

## Visual direction
- Match SANY India’s visual language: Roboto typography, high-contrast black and white, SANY cyan as the product signal, and restrained red accents.
- Use the supplied truck, highway, transparent truck, and cockpit images as the primary product proof; preserve visible SANY branding and realistic vehicle proportions.
- Create a cinematic industrial feel with large photography, precise technical overlays, fine-line diagrams, stat typography, and controlled scroll motion rather than decorative effects.
- Keep the page highly legible on desktop and mobile, with comparison labels and important claims visible without relying on animation.

## Page flow
1. **Opening frame** — full-width SANY EV truck image, focused headline, short fleet-oriented value statement, key figures (up to 462 kWh, up to 315 km), and one “Request a Quote” action.
2. **Comparison framework** — introduce the “Without SANY / With SANY” progression with a persistent stage indicator.
3. **Ten cinematic stages** — build the supplied story in order:
   - Choosing the Truck
   - Energy & Range
   - Power Delivery
   - Vehicle Intelligence
   - Energy Recovery
   - Driver Visibility
   - Driver Environment
   - Heavy-Duty Driveline
   - Charging
   - Fleet Confidence
4. **Stage treatment** — each section pairs a restrained, fragmented “Without SANY” visual with an integrated, illuminated “With SANY” visual. Technical paths, callouts, coverage rings, route lines, and component labels will clarify the difference.
5. **Final convergence** — Battery, Motor, Software, Control, and Axle visually resolve into the complete SANY truck.
6. **Request-a-quote area** — fields for name, company, phone, email, fleet size, route/application, and model interest; a clear demo confirmation after submission.
7. **Minimal footer** — SANY identity, source-site link, and a concise product-information disclaimer.

## Interaction and motion
- Scroll-triggered reveals, route progression, energy-path animation, and subtle stat counters.
- A compact progress marker lets visitors understand where they are in the ten-stage story.
- Respect reduced-motion preferences and keep all content usable without motion.
- Quote actions scroll directly to the form; the form validates required fields and presents a success state locally.

## Asset treatment
- Add the eight supplied files through the project’s managed asset flow.
- Use the transparent truck and cockpit images for detailed technical stages; use the highway images for range and opening scenes.
- Build diagrams and callouts as responsive interface layers so text remains crisp and accurate.
- Only generate supporting backgrounds or technical textures if the supplied imagery leaves a clear visual gap; no invented product model, specification, or unsupported claim.

## Technical details
- Replace the placeholder home page with the complete funnel.
- Extend the existing semantic design tokens for the SANY palette and load Roboto through the page head.
- Keep the implementation componentized by story stage while remaining a single-page experience.
- Add unique page title, description, Open Graph metadata, and Twitter metadata for the SANY EV truck funnel.
- Verify desktop and mobile layouts, image rendering, form states, scroll interactions, reduced-motion behavior, and text contrast.

## Scope boundary
- No database, email delivery, WhatsApp handoff, or real sales integration in this version.
- Contact details will not be displayed yet.
