const loadSection = (id, file) =>
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status} loading ${file}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });

const sections = [
  { id: "tark", file: "sections/tark.html" },
  { id: "houssem", file: "sections/houssem.html" },
  { id: "alaa", file: "sections/alaa.html" },
  { id: "abdo", file: "sections/abdo.html" },
  { id: "jamal", file: "sections/jamal.html" },
  { id: "achref", file: "sections/achref.html" }
];

Promise.all(sections.map(({ id, file }) => loadSection(id, file)))
  .then(() => {
    document.dispatchEvent(new Event("sectionsLoaded"));
  })
  .catch(err => {
    console.error("Failed to load sections:", err);
  });
