
function renderImageMarquee() {
const images = [
  "https://i.pinimg.com/564x/65/a9/52/65a952e59ecd80a16fc97e5acc5e7a01.jpg?w=300",
  "https://i.pinimg.com/564x/d9/49/72/d94972d9cf28b39f6aae26ba7959c911.jpg?w=300",
  "https://i.pinimg.com/564x/86/d5/6f/86d56f303c2a364e838154f8e6b11a7d.jpg?w=300",
  "https://images.unsplash.com/photo-1713778480872-0c4ebc0289e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=300",
  "https://i.pinimg.com/564x/89/ed/67/89ed67c41dfbdcbcc5543f9bf122eac0.jpg?w=300",
  "https://i.pinimg.com/564x/93/40/d0/9340d01603c74f1c4978a9d4f282978c.jpg?w=300",
  "https://i.pinimg.com/564x/e2/15/37/e21537b8412a2dc7643c9419a684d00a.jpg?w=300",
  "https://i.pinimg.com/564x/92/23/5f/92235f8cf0854b44125cc7c6215d1f74.jpg?w=300",
];

 const marqueeWrapper = document.getElementById("image-marquees");
  const totalImages = images.length;
  const animationDuration = 20;

  images.forEach((imageUrl, index) => {
    const item = document.createElement("div");

    item.classList.add("item");
    item.style.backgroundImage = `url(${imageUrl})`;
    item.style.animationDelay = `calc(${animationDuration}s / ${totalImages} * (${totalImages - index - 1}) * -1)`;

    marqueeWrapper.appendChild(item);
  });

  return images;
}

function createCircularText() {
  const textElement = document.querySelector(".text p");
  const circleElement = document.querySelector(".circle");

  const circleSize = circleElement.getBoundingClientRect().width;
  const radius = circleSize / 2;

  const characters = textElement.innerText.split("");
  const angleStep = 360 / characters.length;

  textElement.innerHTML = characters
    .map(
      (char, index) => `
        <span
          style="
            transform: rotate(${index * angleStep}deg);
            transform-origin: 0 ${radius}px;
          "
        >
          ${char}
        </span>
      `
    )
    .join("");
}

function renderAlphabets() {
  const alphabetContainer = document.querySelector(".alphabets");

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  alphabetContainer.innerHTML = `
    <span>ALL</span>
    ${alphabets.map((letter) => `<p>${letter}</p>`).join("")}
  `;
}

function renderPage4(images) {
  const page4 = document.querySelector(".page-4");

  const data = [
    {
      id: 1,
      head: "MEN'S FASHION",
      secHead: "Khadim x Tom Ford Collection",
      para: "25 March 2020",
    },
    {
      id: 2,
      head: "WOMEN'S FASHION",
      secHead: "Spring Summer Trends",
      para: "18 April 2020",
    },
    {
      id: 3,
      head: "BRANDING",
      secHead: "Luxury Editorial Shoot",
      para: "10 May 2020",
    },
    {
      id: 4,
      head: "MODELS TALK",
      secHead: "Glass x Bella",
      para: "18 January 2020",
    },
  ];

  const page4Data = data.map((item, index) => ({
    ...item,
    img: images[index],
  }));

  page4.innerHTML = `
    <h2>UPDATES</h2>

    ${page4Data
      .map(
        (item) => `
          <div class="elem">
            <img src="${item.img}" alt="${item.head}" />

            <h4>${item.head}</h4>

            <div class="elem-part2">
              <h3>${item.secHead}</h3>
              <h5>${item.para}</h5>
            </div>
          </div>
        `
      )
      .join("")}
  `;
}

function renderTextMarquee() {
  const texts = [
    "PREMIER MODELS 2024",
    "FASHION WEEK",
    "TOP MODELS",
    "PREMIER AGENCY",
  ];

  const marqueeContent = document.getElementById("marqueeContent");

  for (let i = 0; i < 4; i++) {
    texts.forEach((text) => {
      const heading = document.createElement("h3");
      heading.textContent = text;
      marqueeContent.appendChild(heading);
    });
  }
}

function init() {
  const images = renderImageMarquee();

  renderAlphabets();
  renderPage4(images);
  renderTextMarquee();
  createCircularText();
}

window.addEventListener("load", init);
window.addEventListener("resize", createCircularText);