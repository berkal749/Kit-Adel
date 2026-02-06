document.addEventListener("sectionsLoaded", () => {
  let quot = document.getElementById("quot");

  let quotname = document.getElementById("namequot");

  console.log(quot);
  console.log(quotname);

  let quots = [
    {
      quot: "bandem is a very smart being yet he make mistakes",
      name: "wiseman",
      id: "profile1",
    },
    {
      quot: "If you aren't already on Kit, you should be.",
      name: "wiseman",
      id: "profile2",
    },

    {
      quot: "Kit is the best thing that has ever happened to me",
      name: "wiseman",
      id: "profile3",
    },

    {
      quot: "Kit is the best thing that has ever happened to me",
      name: "wiseman",
      id: "profile4",
    },

    {
      quot: "Kit is the best thing that has ever happened to me",
      name: "wiseman",
      id: "profile5",
    },
  ];

  quots.forEach((e) => {
    let button = document.getElementById(e.id);
    button.addEventListener("click", function () {
      quot.innerText = e.quot;
      quotname.innerText = e.name;
    });
  });
});
