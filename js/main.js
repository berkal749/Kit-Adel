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