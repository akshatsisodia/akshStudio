const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page3Animation() {
  const elemC = document.querySelector("#elem-container");
  const fixed = document.querySelector("#fixed-image");

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  const elems = document.querySelectorAll(".elem");

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      const image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

function blackBox() {
  const Design = document.querySelector(".Design");
  const design = document.querySelector("#design");
  const Project = document.querySelector(".Project");
  const Execution = document.querySelector(".Execution");
  const desc = document.querySelector(".desc");
  const image = document.querySelector(".page4-img");

  Design.addEventListener("click", function () {
    desc.textContent =
      "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
    const add = Design.getAttribute("data-image");
    image.setAttribute("src", `${add}`);
    Design.style.right = "2vw";
    design.style.color = "#EFEAE3";
    Project.style.right = "0vw";
    Project.style.color = "#504A45";
    Execution.style.right = "0vw";
    Execution.style.color = "#504A45";
  });
  Project.addEventListener("click", function () {
    desc.textContent =
      "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
    const add = Project.getAttribute("data-image");
    image.setAttribute("src", `${add}`);
    Project.style.right = "2vw";
    Project.style.color = "#EFEAE3";
    Design.style.right = "0vw";
    design.style.color = "#504A45";
    Execution.style.right = "0vw";
    Execution.style.color = "#504A45";
  });

  Execution.addEventListener("click", function () {
    desc.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
    const add = Execution.getAttribute("data-image");
    image.setAttribute("src", `${add}`);
    Execution.style.right = "2vw";
    Execution.style.color = "#EFEAE3";
    Design.style.right = "0vw";
    design.style.color = "#504A45";
    Project.style.right = "0vw";
    Project.style.color = "#504A45";
  });
}

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: false,
    spaceBetween: 30,
  });
}

function menuAnimation() {
  const menu = document.querySelector("nav button");
  const full = document.querySelector(".full-scr");
  const img = document.querySelector("nav img");

  let flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      img.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      img.style.opacity = 1;
      flag = 0;
    }
  });
}

function loader() {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 3800);
}

page3Animation();
swiperAnimation();
blackBox();
menuAnimation();
loader();
