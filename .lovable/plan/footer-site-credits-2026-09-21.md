# Footer Site Credits

## Goal
Add a compact site-credits badge to the bottom-right of the existing SANY footer, styled after the supplied `.poweredBy` / `.creditLogo` snippet and using a small logo image.

## Design direction
- Keep the current dark corporate footer (navy background, SANY logo on the left, disclaimer in the middle, "Visit SANY India" link on the right).
- Append a small `.poweredBy` credit block to the right end of the footer, aligned to the bottom-right.
- Use a tiny logo image + short text (e.g. "Made with Lovable"), sized discretely so it does not compete with the SANY brand.
- Apply the supplied responsive treatment: on viewports below 768 px reduce padding to `6px 10px`, gap to `8px`, and logo height to `10px`.
- Match the footer’s colour scheme (muted white/grey text, subtle hover).

## Layout changes
1. Update the `<footer>` in `src/routes/index.tsx`:
   - Wrap the existing right-side "Visit SANY India" link and the new credit badge in a right-hand group so the credit can sit below or beside it at the bottom-right.
   - Add a `<span className="poweredBy">` element containing a small logo image (`.creditLogo img`) and a short credit line.
2. Add `.poweredBy` and `.creditLogo` styles in `src/styles.css` inside the existing footer CSS block:
   - `display: inline-flex; align-items: center;`
   - Background/padding/gap tuned to the snippet values at desktop, with the reduced values inside `@media (max-width: 768px)`.
   - Ensure it stacks neatly in the mobile footer layout (currently the footer becomes a single column below 900 px).
3. Provide a placeholder logo asset path. If the user supplies a specific credit logo, swap the `src`.

## Content
- Text: "Made with Lovable" (placeholder; easy to change).
- Logo: small PNG/SVG at ~12–14 px desktop, ~10 px mobile.

## Behavior
- Link the badge to `https://lovable.dev` (or leave non-linked if preferred).
- Keep reduced-motion support: no extra animation on the credits.
- Ensure no horizontal overflow on mobile and that the badge does not overlap the disclaimer text.

## Verification
- Desktop 1280 px: footer shows SANY logo, disclaimer, visit link, and credit badge aligned bottom-right.
- Mobile 390 px: footer stacks cleanly; credit badge is small and readable.
- No console errors, no layout overflow.
