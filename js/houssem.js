const items = [
  {
    image: "https://media.kit.com/images/pages/home/carousel/matthew-mcconaughey.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Matthew McConaughey",
    role: "Founder of Lyrics of Livin newsletter"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/nicole-walters.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Nicole Walters",
    role: "New York Times bestselling author, Emmy nominated producer, and CEO"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/ali-abdaal.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Ali Abdaal",
    role: "Ex-doctor turned Productivity Expert, YouTuber, bestselling author, and entrepreneur"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/susan-cain.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Susan Cain",
    role: "#1 New York Times bestselling author, and speaker"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/pat-flynn.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Pat Flynn",
    role: "Entrepreneur, YouTuber, and podcast host"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/james-clear.png?q=75&amp;fm=webp&amp;auto=format",
    name: "James Clear",
    role: "Author of #1 New York Times bestseller, Atomic Habits"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/lil-jon.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Lil Jon",
    role: "Grammy winning entertainer, producer, and DJ. Founder of Wellness Wednesday"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/mandy-moore.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Mandy Moore",
    role: "Emmy-, Grammy-, and Golden Globe-nominated actress, singer, and songwriter"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/andrew-huberman.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Andrew Huberman",
    role: "Professor of Neurobiology & Ophthalmology at Stanford, and podcast host"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/nisha-vora.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Nisha Vora",
    role: "Vegan cookbook author, YouTuber with 1M+ subscribers"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/tim-ferris.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Tim Ferriss",
    role: "Five-time New York Times bestselling author, podcast host"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/tomi-adeyemi.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Tomi Adeyemi",
    role: "Time 100 most influential people, #1 New York Times bestselling novelist"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/mark-manson.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Mark Manson",
    role: "Three-time #1 New York Times bestselling author"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/rachel-rodgers.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Rachel Rodgers",
    role: "Angel investor, CEO & Founder of Hello Seven"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/ryan-holiday.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Ryan Holiday",
    role: "#1 New York Times bestselling author, podcast host"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/sahil-bloom.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Sahil Bloom",
    role: "Entrepreneur, investor, and newsletter writer with 800K+ subscribers"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/tim-mcgraw.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Tim McGraw",
    role: "Grammy award-winning singer and songwriter"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/skinny-confidential.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Skinny Confidential",
    role: "Michael & Lauryn Bosstick. The Skinny Confidential Him & Her Show"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/robert-greene.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Robert Greene",
    role: "#1 New York Times bestselling author"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/gillian-perkins.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Gillian Perkins",
    role: "Entrepreneur and digital marketing expert with 35M+ views on YouTube"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/arthur-brooks.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Arthur Brooks",
    role: "Harvard professor, PhD social scientist, and #1 bestselling author"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/linsey-stirling.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Lindsey Stirling",
    role: "Violinist, dancer, and award-winning songwriter"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/courtland-allen.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Courtland Allen",
    role: "Y Combinator alum, full-stack web developer, and founder of Indie Hackers"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/shannon-wild.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Shannon Wild",
    role: "National Geographic wildlife photographer and filmmaker"
  },
  {
    image: "https://media.kit.com/images/pages/home/carousel/lindsay-ostrom.png?q=75&amp;fm=webp&amp;auto=format",
    name: "Lindsay Ostrom",
    role: "Creator of food blog Pinch of Yum"
  }
]

const CarouselItem = (item) => `
    <div class="h-carousel-item">
      <img
        alt=${item.name}
        data-nimg="1"
        class="h-carousel-image"
        src=${item.image}
      />
      <div class="h-carousel-text">
        <p class="h-carousel-name">${item.name}</p>
        <p class="h-carousel-role">${item.role}</p>
      </div>
    </div>
    `;

document.addEventListener("sectionsLoaded", () => {
  console.log("DOM fully loaded and parsed - houssem.js");
  const carousel = document.getElementById("group1");
  const carousel2 = document.getElementById("group2");
  carousel.innerHTML = items.map(CarouselItem).join("")
  carousel2.innerHTML = items.map(CarouselItem).join("")
});