const loadSection = async (id, file) => {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
};

loadSection("tark", "sections/tark.html");
loadSection("houssem", "sections/houssem.html");
loadSection("alaa", "sections/alaa.html");
loadSection("adbo", "sections/adbo.html");
loadSection("achref", "sections/achref.html");

const icons = [
`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <rect x="3" y="4" width="18" height="14" rx="2"/>
  <path d="M3 6l9 6 9-6"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <path d="M4 9h16"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M13 2L3 14h7l-1 8 10-12h-7z"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M8 8h8M8 12h8M8 16h8"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M12 2l7 4v6c0 5-7 10-7 10S5 17 5 12V6l7-4z"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <rect x="4" y="4" width="16" height="16" rx="2"/>
  <path d="M9 9h6v6H9z"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M4 12a4 4 0 008 0"/>
  <path d="M12 12a4 4 0 008 0"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M3 3v18h18"/>
  <path d="M7 14l4-4 4 3 5-6"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M4 19h16"/>
  <path d="M7 9h3M14 9h3"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <rect x="2" y="6" width="20" height="12" rx="2"/>
  <path d="M2 10h20"/>
</svg>`,

`<svg viewBox="0 0 24 24" fill="none" stroke="#44B1FF" stroke-width="2">
  <path d="M6 6h15l-1.5 9h-13z"/>
  <circle cx="9" cy="20" r="1"/>
  <circle cx="18" cy="20" r="1"/>
</svg>`
];

let h6SectionAbdo = ["Email marketing","Newsletters","Visual Automations","Forms & opt-ins","Segmentation & Tagging","Landing Pages","Recommendations","Kit App Store",
  "Analytics & Insights","Email A/B testing","Sponsorships & Kit Ads","Commerce"];
let pSectionAbdo = ["Reach your audience with personalized, engaging emails.", "Write and design newsletters that build loyal fans.","Build email sequences and workflows with drag-and-drop simplicity.","Capture subscribers with customizable opt-in forms.",
  "Organize subscribers for targeted, relevant messaging.","Build beautiful customized website pages that convert.","Grow subscribers by cross-promoting with other creators.","Connect all your tools so everything works together seamlessly.","Track growth with actionable audience insights.","Optimize email conversions with data-driven split testing.","Monetize your newsletter with premium brand partnerships."
  ,"Sell digital products, memberships, and subscriptions directly through Kit."
];












