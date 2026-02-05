const loadSection = async (id, file) => {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
};

const sections = [
  {
    id: "tark",
    file: "sections/tark.html",
  },
  {
    id: "houssem",
    file: "sections/houssem.html",
  },
  {
    id: "alaa",
    file: "sections/alaa.html",
  },
  {
    id: "abdo",
    file: "sections/abdo.html",
  },
  {
    id: "jamal",
    file: "sections/jamal.html",
  },
  {
    id: "achref",
    file: "sections/achref.html",
  },
];

const promises = sections.map((section) => loadSection(section.id, section.file));

Promise.all(promises).then(() => {
  console.log("All sections loaded");
  document.dispatchEvent(new Event("sectionsLoaded"));
});