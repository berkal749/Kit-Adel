document.addEventListener("sectionsLoaded", () => {
  const quoteEl = document.getElementById("quot");
  const nameEl = document.getElementById("namequot");

  const quotes = [
    { quote: "If you aren't already on Kit, you should be.", name: "wiseman", id: "profile1" },
    { quote: "Kit is the best thing that has ever happened to me", name: "wiseman", id: "profile2" },
    { quote: "Kit is the best thing that has ever happened to me", name: "wiseman", id: "profile3" },
    { quote: "Kit is the best thing that has ever happened to me", name: "wiseman", id: "profile4" },
    { quote: "Kit is the best thing that has ever happened to me", name: "wiseman", id: "profile5" },
  ];

  quotes.forEach(({ quote, name, id }) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        quoteEl.textContent = quote;
        nameEl.textContent = name;
      });
    }
  });
});
